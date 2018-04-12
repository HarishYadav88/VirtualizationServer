function VirtCollection() {
    this.virts = [
        {
            "virtualizationID": "1",
            "apiType": "REST",
            "name": "petstore",
            "protocol": "HTTP",
            "port": 8082,
            "running": false
        },
        {
            "virtualizationID": "2",
            "apiType": "WSDL",
            "name": "currencyconverter",
            "protocol": "HTTP",
            "port": 8089,
            "running": true
        },
        {
            "virtualizationID": "3",
            "apiType": "REST",
            "name": "paystore",
            "protocol": "HTTPS",
            "port": 8088,
            "running": false
        }
    ];
}

/**
 * Retrieve all virts
 * Returns: array of virts
 */
VirtCollection.prototype.getVirts = function () {
    return this.virts;
}
/**
 * Update an existing virt
 * Param: VirtID of the virt to update
 * Param: updatedVirt
 */
VirtCollection.prototype.update = function (virtID, updatedVirt) {
    var found = false;
    for (var i = 0; i < this.virts.length; i++) {
        var virt = this.virts[i];
        if (virt.virtualizationID == virtID) {
            this.virts[i].apiType = updatedVirt.apiType || virt.apiType;
            this.virts[i].name = updatedVirt.name || virt.name;
            this.virts[i].protocol = updatedVirt.protocol || virt.protocol;
            this.virts[i].port = updatedVirt.port || virt.port;
            this.virts[i].running = (updatedVirt.running == null ) ?  virt.running : updatedVirt.running;
            found = true;
            break;
        }
    }

    if (!found) {
        throw new Error('virt not found');
    }
}

module.exports = VirtCollection;
