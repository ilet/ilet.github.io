{
	name: "delet",
	regEx: "^!clear messages$",
	act: dmsg => {
		if (dmsg.member.hasPermission("MANAGE_MESSAGES"))
            dmsg.channel.fetchMessages().then(function(L){
				dmsg.channel.bulkDelete(L);
			}, function(err){
				dmsg.channel.send("ERROR: ERROR CLEARING CHANNEL.")
			});                       
	}
}
