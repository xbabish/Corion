exports.run = async (bot,message,args) => {

    const member = message.mentions.members.first();
    if(!member) return message.reply("Please specify a member!");
  
    try {
        member.setNickname(null);
        message.reply(`I've resetted his nickname!`)
    }
    catch (err)
    {
console.log(err);
message.reply("I do not have permission to set " + member.toString() + " nickname");

    }
    

}

exports.help = {
name: 'resetnick'
}