const path = require('path');
const grpc = require('grpc');

const PROTO_PATH = path.resolve(__dirname, './test.proto');
const testProto = grpc.load(PROTO_PATH).testPackage;


function pingTest(call, callback) {
    console.log(call);
    const time = new Date();
    callback(null, { message: `现在时间为：${time.toString()}` });
};

const server = new grpc.Server();
server.addProtoService(testProto.testService.service, { ping: pingTest});
server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
server.start();