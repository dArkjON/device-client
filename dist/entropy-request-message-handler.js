"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var device_message_helper_1 = require("./device-message-helper");
var ByteBuffer = require("bytebuffer");
var Bitcore = require("bitcore-lib");
var EntropyRequestMessageHandler = (function () {
    function EntropyRequestMessageHandler() {
    }
    EntropyRequestMessageHandler.prototype.messageHandler = function (request) {
        var message = device_message_helper_1.DeviceMessageHelper.factory('EntropyAck');
        var randomBytes = ByteBuffer.wrap(Bitcore.crypto.Random.getRandomBuffer(32));
        message.setEntropy(randomBytes);
        return message;
    };
    EntropyRequestMessageHandler.messageNames = ['EntropyRequest'];
    return EntropyRequestMessageHandler;
}());
exports.EntropyRequestMessageHandler = EntropyRequestMessageHandler;
