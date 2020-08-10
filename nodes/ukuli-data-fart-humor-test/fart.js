module.exports = function(RED) {
    function FartFunNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = config.fart;
            node.send(msg);
        });
    }
    RED.nodes.registerType("ukuli-data-fart-humor-test",FartFunNode);
}
