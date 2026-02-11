// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Marketplace {
    struct Service {
        uint256 id;
        address provider;
        string name;
        string description;
        uint256 price;
        bool isActive;
    }

    uint256 public serviceCount;
    mapping(uint256 => Service) public services;

    event ServiceRegistered(uint256 indexed id, address indexed provider, string name, uint256 price);
    event ServicePurchased(uint256 indexed id, address indexed buyer);

    constructor() {
        serviceCount = 0;
    }

    function registerService(string memory _name, string memory _description, uint256 _price) public {
        serviceCount++;
        services[serviceCount] = Service(
            serviceCount,
            msg.sender,
            _name,
            _description,
            _price,
            true
        );
        emit ServiceRegistered(serviceCount, msg.sender, _name, _price);
    }

    function purchaseService(uint256 _id) public payable {
        Service memory service = services[_id];
        require(service.id != 0, "Service does not exist");
        require(msg.value >= service.price, "Insufficient funds");
        require(service.isActive, "Service is not active");

        payable(service.provider).transfer(msg.value);
        emit ServicePurchased(_id, msg.sender);
    }
}
