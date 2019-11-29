let plugin = new Plugin({
    stringNamespace: "helloworld"
});
let client = plugin.getClient();
let utils = plugin.getUtils();

let helloWorldCmd = new Command({
    name: "helloworld",
    aliases: ["hello-world", "hello_world"],
    descriptionString: "command.helloworld.description",
    usageString: ""
});
plugin.registerCommand(helloWorldCmd, (cmd, args, message) => {
    if(args.length == 0) {
        message.channel.send(await client.string("command.helloworld.message"));
    } else {
        // message.channel.send((await client.string("general.syntax")).replace("$command", client.prefix + cmd));
        utils.sendSyntax(message.channel, cmd);
    }
});
