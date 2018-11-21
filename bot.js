client.on('message', msg => {
var prefix = "Mistream";//البرفكس
  var args = msg.content.split(' ').slice(1);
  var argresult = args.join(' ');
if (msg.author.bot) return;
if(msg.content.startsWith(prefix + "setstream")) {
      if(msg.author.id != "337398843458977792") return msg.reply("هذا الامر لصحاب الحساب");
      client.user.setGame(`${argresult}`,"http://twitch.tv/S-F")
      var Die = new Discord.RichEmbed()
      .setTitle("✅تم تغير الستريمنق الخاص بك")
     .addField("New Stream",`${argresult}`, true)
     msg.channel.sendEmbed(Die);
}
});
