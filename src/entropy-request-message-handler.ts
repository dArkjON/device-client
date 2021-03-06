import EntropyRequest = DeviceMessages.EntropyRequest;
import EntropyAck = DeviceMessages.EntropyAck;
import {DeviceMessageHelper} from "./device-message-helper";
import ByteBuffer = require('bytebuffer');
import * as Bitcore from "bitcore-lib";

export class EntropyRequestMessageHandler implements MessageHandler<EntropyRequest, EntropyAck> {
  public static messageNames = ['EntropyRequest'];

  public messageHandler(request: EntropyRequest): EntropyAck {
    var message: EntropyAck = DeviceMessageHelper.factory('EntropyAck');
    let randomBytes = ByteBuffer.wrap(Bitcore.crypto.Random.getRandomBuffer(32));
    message.setEntropy(randomBytes);
    return message;
  }
}
