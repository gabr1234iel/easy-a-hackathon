// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Marketplace {
    struct Rating {
        address rater;
        uint8 stars; // 1-5
        string comment;
        uint256 timestamp;
    }

    struct Service {
        uint256 id;
        address provider;
        string name;
        string description;
        uint256 price;
        bool isActive;
        uint256 totalRatingScore;
        uint256 ratingCount;
    }

    uint256 public serviceCount;
    mapping(uint256 => Service) public services;
    mapping(uint256 => Rating[]) public serviceRatings;
    
    // Track purchases: serviceId => user => count
    mapping(uint256 => mapping(address => uint256)) public userPurchaseCount;
    // Track ratings: serviceId => user => count
    mapping(uint256 => mapping(address => uint256)) public userRatingCount;

    event ServiceRegistered(uint256 indexed id, address indexed provider, string name, uint256 price);
    event ServicePurchased(uint256 indexed id, address indexed buyer);
    event ServiceRated(uint256 indexed id, address indexed rater, uint8 stars, string comment);

    // Reentrancy Guard
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;
    uint256 private _status;

    modifier nonReentrant() {
        require(_status != _ENTERED, "ReentrancyGuard: reentrant call");
        _status = _ENTERED;
        _;
        _status = _NOT_ENTERED;
    }

    constructor() {
        serviceCount = 0;
        _status = _NOT_ENTERED;
    }

    function registerService(string memory _name, string memory _description, uint256 _price) public {
        serviceCount++;
        services[serviceCount] = Service(
            serviceCount,
            msg.sender,
            _name,
            _description,
            _price,
            true,
            0,
            0
        );
        emit ServiceRegistered(serviceCount, msg.sender, _name, _price);
    }

    function purchaseService(uint256 _id) public payable nonReentrant {
        Service storage service = services[_id];
        require(service.id != 0, "Service does not exist");
        require(msg.value >= service.price, "Insufficient funds");
        require(service.isActive, "Service is not active");

        // Record purchase
        userPurchaseCount[_id][msg.sender]++;

        payable(service.provider).transfer(msg.value);
        emit ServicePurchased(_id, msg.sender);
    }

    function submitRating(uint256 _serviceId, uint8 _stars, string memory _comment) public {
        require(_stars >= 1 && _stars <= 5, "Rating must be between 1 and 5");
        require(userPurchaseCount[_serviceId][msg.sender] > userRatingCount[_serviceId][msg.sender], "Must purchase service to rate");
        
        Service storage service = services[_serviceId];
        require(service.id != 0, "Service does not exist");

        // Record rating
        userRatingCount[_serviceId][msg.sender]++;
        
        // Update service stats
        service.totalRatingScore += _stars;
        service.ratingCount++;

        // Add to ratings list
        serviceRatings[_serviceId].push(Rating({
            rater: msg.sender,
            stars: _stars,
            comment: _comment,
            timestamp: block.timestamp
        }));

        emit ServiceRated(_serviceId, msg.sender, _stars, _comment);
    }

    function getAverageRating(uint256 _serviceId) public view returns (uint256) {
        Service memory service = services[_serviceId];
        if (service.ratingCount == 0) return 0;
        // Return average * 10 to keep 1 decimal place precision if needed, or just integer
        // Here returning standard integer average. For UI, you might want (total * 10 / count)
        return (service.totalRatingScore * 10) / service.ratingCount;
    }

    function getServiceRatings(uint256 _serviceId) public view returns (Rating[] memory) {
        return serviceRatings[_serviceId];
    }
}
