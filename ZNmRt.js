var scriptName = "ZNmRt";
var scriptVersion = 2.5;
var scriptAuthor = "zxczenos138";

var EntityPlayer = Java.type('net.minecraft.entity.player.EntityPlayer');
var C04PacketPlayerPosition = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition');
var EntityPlayer = Java.type('net.minecraft.entity.player.EntityPlayer');
var C03PacketPlayer = Java.type('net.minecraft.network.play.client.C03PacketPlayer');
var C04PacketPlayerPosition = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition');
var C05PacketPlayerLook = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook");
var C06PacketPlayerPosLook = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook");
var S15PacketEntityRelMove = Java.type("net.minecraft.network.play.server.S14PacketEntity.S15PacketEntityRelMove");
var S17PacketEntityLookMove = Java.type("net.minecraft.network.play.server.S14PacketEntity.S17PacketEntityLookMove");
var MSTimer = Java.type('net.ccbluex.liquidbounce.utils.timer.MSTimer');
var timer = new MSTimer

var C03 = Java.type("net.minecraft.network.play.client.C03PacketPlayer");
var C04 = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition");
var C06 = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook");
var MSTimer = Java.type('net.ccbluex.liquidbounce.utils.timer.MSTimer');
var timer = new MSTimer();
var timer2 = new MSTimer();
var timer3 = new MSTimer();
var timer4 = new MSTimer();
var timer5 = new MSTimer();

var C06PlayerPacket = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook');
var C06PlayerPacket = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook');
var C04PacketPlayerPosition = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition');
var C05PacketPlayerLook = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook');
var C03PacketPlayer = Java.type('net.minecraft.network.play.client.C03PacketPlayer');
var S08PacketPlayerPosLook = Java.type("net.minecraft.network.play.server.S08PacketPlayerPosLook");

var EntityPlayer = Java.type('net.minecraft.entity.player.EntityPlayer');
var MSTimer = Java.type("net.ccbluex.liquidbounce.utils.timer.MSTimer");
var Delay = new MSTimer();
var EntityLivingBase = Java.type('net.minecraft.entity.EntityLivingBase');
var C04PacketPlayerPosition = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition');
var C03PacketPlayer = Java.type('net.minecraft.network.play.client.C03PacketPlayer');
var NoGroundJumpTicks = 0;
var NoGroundPacketing = 0;

var C06PlayerPacket = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook');
var C06PlayerPacket = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook');
var C04PacketPlayerPosition = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition')
var C05PacketPlayerLook = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook');
var C03PacketPlayer = Java.type('net.minecraft.network.play.client.C03PacketPlayer');
var S08PacketPlayerPosLook = Java.type("net.minecraft.network.play.server.S08PacketPlayerPosLook");
var Fly = moduleManager.getModule("Fly");
var Killaura = moduleManager.getModule("Killaura");

function sb() {
	
	var Pos = [0.01628848483929,0.01628838949490200,0.001]
	var Pos2 = [0.006129381321,0.01300000129312,0.00500000001304,0.00150000001304]
	var Pos3 = [0.01628848483929,0.01628838949490200,0.001]
   	var Pos4 = [0.0165745,0.01687742230,0.0165845241654,0.016874564786]
	var Pos5 = [0.005190001210,0.01619001210,0.01110001210,0.00101]
	var Pos6 = [0.00525100001293,0.0141240401,0.00514100001293,0.01612418249]
	
	var setting = {
		float: function (name, def, min, max) {
			return value.createFloat(name, def, min, max);
		},
		integer: function (name, def, min, max) {
			return value.createInteger(name, def, min, max);
		},
		boolean: function (name, def) {
			return value.createBoolean(name, def);
		},
		list: function (name, values, def) {
			return value.createList(name, values, def);
		}
	};

	var settings = {
	Mode: setting.list("Mode", ["AAC4HIT", "AAC4Packet", "Packet", "NCPPacket", "ZN", "MT", "TPHop", "Horizon", "AntiCheat","CustomPacket", "CustomMotion", "Matrix-TPHop", "ZNmRt-TPHop", "NCP", "Horizon2", "Spartan2", "Packet2", "Flux", "Matrix", "Custom", "MatrixZNmRt", "BHop", "AACPacket", "Matrix2", "Custom2", "New", "RemixPacket","ZeroDayPacket","Miracle","Luna","Health", "Leain","OldPacket", "LiquidBounce", "ZNmRt-Bounce", "LiquidX", "AAC4HIT"),
    MotionY: setting.float("CustomMotionY", 0, 0, 1),
     delay: setting.float("Delay", 0, 0, 200),
     hurttime: setting.integer("HurtTime", 0, 0, 40),
     particles: setting.boolean("SpawnParticlesOnAttack", true),
	 MotionY: setting.float("CustomMotionY", 0.05, 0.01, 0.42),
	Timer: setting.float("Timer", 1, 0.1, 10),
	 Delay: setting.integer("Delay",3,0,31),
	 Soul: setting. integer("Soul",3,0,42),
	 NewDiv: setting.boolean("NewDivide", false)
		 };
    this.getName = function() {
        return "ZNmRt";
    };
	
    this.getDescription = function() {
        return "ZNmRtAdd";
    };
	
    this.getCategory = function() {
        return "Misc";
	};
	
	this.onEnable = function() {
		if(settings.Mode.get() == "NoGround") {
            mc.thePlayer.jump()
        }
		chat.print("ZNmRt");
		chat.print("ZNmRt");
		chat.print("ZNmRt");
		chat.print("ZNmRt");
		chat.print("ZNmRt");
		chat.print("ZNmRt");
		chat.print("ZNmRt");
		chat.print("ZNmRt");
	}
	
	this.onUpdate = function() {
	}
	
	this.onDisable = function() {
		mc.timer.timerSpeed = 1.0;
		shit = 0;
		chat.print("ZNmRt");
		chat.print("ZNmRt");
		chat.print("ZNmRt");
		chat.print("ZNmRt");
		chat.print("ZNmRt");
		chat.print("ZNmRt");
		chat.print("ZNmRt");
		chat.print("ZNmRt");
	}
	
		var shit = 0;
	this.onAttack = function (event) {
	if(event.getTargetEntity() instanceof EntityPlayer){
		entity = event.getTargetEntity();
	}
				    switch(settings.Mode.get()) {
		    case "AAC4HIT":	 
                mc.thePlayer.onCriticalHit(entity)
					break;
								    case "AAC4Packet":
		mc.thePlayer.sendQueue.addToSendQueue(new C03PacketPlayer.C04PacketPlayerPosition(ma.thePlayer.posX, mc.thePlayer.posY + 0.0031311231111, mc.thePlayer.posZ, false))

					}
					        var target = event.getTargetEntity()
        if(target != null && mc.thePlayer.onGround) {
            switch(settings.Mode.get()) {
                case "Packet":
                    if(timer.hasTimePassed(settings.delay.get()) && target.hurtTime <= settings.hurttime.get()) {
                        mc.getNetHandler().addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.05250000001304, mc.thePlayer.posZ, false))
                        mc.getNetHandler().addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.00150000001304, mc.thePlayer.posZ, false))
                        mc.getNetHandler().addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.05250000001304, mc.thePlayer.posZ, false))
                        mc.getNetHandler().addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.00150000001304, mc.thePlayer.posZ, false))
                        mc.thePlayer.onCriticalHit(target)
                        timer.reset()
                    }
                break;
                case "NCPPacket":
                    if(timer.hasTimePassed(settings.delay.get()) && target.hurtTime <= settings.hurttime.get()) {
                        mc.getNetHandler().addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.11, mc.thePlayer.posZ, false))
                        mc.getNetHandler().addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.1100013579, mc.thePlayer.posZ, false))
                        mc.getNetHandler().addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY +  0.00114514, mc.thePlayer.posZ, false))
                        mc.thePlayer.onCriticalHit(target)
                        timer.reset()
                    }
                break;
		            case "ZN":
		                if(mc.thePlayer.motionX == 0.0 && mc.thePlayer.motionZ == 0.0) {
		         	          mc.thePlayer.motionY = 0.42;
                    }
                break;
		            case "MT":
		                if(mc.thePlayer.motionX == 0.0 && mc.thePlayer.motionZ == 0.0) {
		    	              mc.thePlayer.motionY = 0.20;
                    }  
                break;
                case "TPHop":
                    if(timer.hasTimePassed(settings.delay.get()) && target.hurtTime <= settings.hurttime.get()) {
                        mc.getNetHandler().addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.02, mc.thePlayer.posZ, false))
                        mc.getNetHandler().addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY +  0.01, mc.thePlayer.posZ, false))
                        mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.01, mc.thePlayer.posZ)
                        timer.reset()
                    }
                break;
                case "Horizon":
                    if(mc.thePlayer.motionX == 0.0 && mc.thePlayer.motionZ == 0.0) {
                        mc.getNetHandler().addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.0001, mc.thePlayer.posZ, true))
                        mc.getNetHandler().addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
                        mc.thePlayer.onCriticalHit(target)
                    }
                break;
                case "NoGround":
                break;
                case "AntiCheat":
                    if(timer.hasTimePassed(settings.delay.get()) && target.hurtTime <= settings.hurttime.get()) {
                        mc.getNetHandler().addToSendQueue(new S15PacketEntityRelMove.S17PacketEntityLookMove(mc.thePlayer.posX, mc.thePlayer.posY + 0.003140421304, mc.thePlayer.posZ, true));
                        mc.getNetHandler().addToSendQueue(new S15PacketEntityRelMove.S17PacketEntityLookMove(mc.thePlayer.posX, mc.thePlayer.posY + 0.00150000001304, mc.thePlayer.posZ, false))
                        timer.reset()
                    }
                break;
            }
        }
		
		        var target = event.getTargetEntity()
        if(mc.thePlayer.onGround) {
            switch(settings.Mode.get()) {
                case "CustomPacket":
                    if(timer.hasTimePassed(settings.delay.get()) && target.hurtTime <= settings.hurttime.get()) {
                        mc.thePlayer.sendQueue.addToSendQueue(new C04(mc.thePlayer.posX, mc.thePlayer.posY + settings.packety.get(), mc.thePlayer.posZ, true))
                        mc.thePlayer.sendQueue.addToSendQueue(new C04(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
                        timer.reset()
                    }
                break;
                case "CustomMotion":
                    if(timer2.hasTimePassed(settings.delay.get()) && target.hurtTime <= settings.hurttime.get()) {
                        mc.thePlayer.motionY = motiony.get()
                        timer2.reset()
                    }
                break;
                case "Matrix-TPHop":
                    if(mc.thePlayer.motionX == 0 && mc.thePlayer.motionZ == 0) {
                        mc.thePlayer.motionY = 0.269
                    }
                break;
                case "ZNmRt-TPHop":
                    if(mc.thePlayer.motionX == 0 && mc.thePlayer.motionZ == 0) {
                        mc.thePlayer.motionY = 0.219
                    }  
                case "NCP":
                    if(timer3.hasTimePassed(500) && target.hurtTime <= 8) {
                        mc.thePlayer.sendQueue.addToSendQueue(new C04(mc.thePlayer.posX, mc.thePlayer.posY + 0.11, mc.thePlayer.posZ, true))
                        mc.thePlayer.sendQueue.addToSendQueue(new C04(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
                        timer3.reset()
                    }
                break;
                case "Horizon2":
                    if(mc.thePlayer.motionX == 0.0 && mc.thePlayer.motionZ == 0.0) {
                        mc.thePlayer.sendQueue.addToSendQueue(new C04(mc.thePlayer.posX, mc.thePlayer.posY + 0.0001, mc.thePlayer.posZ, true))
                        mc.thePlayer.sendQueue.addToSendQueue(new C04(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
                    }
                break;
                case "Spartan2":
                    if(timer4.hasTimePassed(600)) {
                        mc.thePlayer.sendQueue.addToSendQueue(new C04(mc.thePlayer.posX, mc.thePlayer.posY + 0.2, mc.thePlayer.posZ, true))
                        mc.thePlayer.sendQueue.addToSendQueue(new C04(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
                    }
				if(mc.thePlayer.onGround) {
		switch(settings.Mode.get()) {
		case "Packet2":
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.00000000128, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
		break;
		case "Flux": // tried to remake what flux has as "Hypixel" mode but i think this is patched on Hypixel
	    	shit++;
		    if(shit == 1) { 
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.001, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
		    }
		    if(shit >= 5) {
			shit = 0;
		    }
		break;
		case "Hop2":
			mc.thePlayer.motionY = 0.10;
		break;
		case "Matrix":
		    if(mc.thePlayer.motionX == 0.0 && mc.thePlayer.motionZ == 0.0) {
		    	mc.thePlayer.motionY = 0.20; //0.05 worked before maybe i was glitched idk
		    }
		break;
		case "Spartan3": // seems to work on Spartan on treeAC, every other hit is a critical
		    shit++;
		    if(shit == 1) { 
		    	mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.04, mc.thePlayer.posZ, true))
		    	mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
		    }
		    if(shit >= 10) {
			shit = 0;
		    }
		break;
		case "Horizon3": // it also seems to work on treeAC Horizon, maybe Horizon there is different?
		if(mc.thePlayer.motionX == 0.0 && mc.thePlayer.motionZ == 0.0) {
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.00000000255, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
		}
		
		break;
		case "Custom":
			mc.thePlayer.motionY = settings.MotionY.get();
		break;
		}
		}
    break;
		case "MatrixZNmRt":
		    if(mc.thePlayer.motionX == 0.0 && mc.thePlayer.motionZ == 0.0) {
		    	mc.thePlayer.motionY = 0.20; //0.05 worked before maybe i was glitched idk
		
				var entity = event.getTargetEntity();
		if (entity instanceof EntityLivingBase && !(Timer.get() > 0 && !Delay.hasTimePassed(settings.Timer.get())) && (settings.Mode.get() == 'CriticalsHIT' || mc.thePlayer.onGround && !mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(0, -0.05, 0)).isEmpty()) && (entity.hurtTime == 0 || entity.hurtTime >= 4)) {
			switch (settings.Mode.get()) {
				case "Packet3":
					for (var i in Pos) {
						mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + Pos[i], mc.thePlayer.posZ, false));
					}
					break;
				case "BHop":
					mc.thePlayer.jump();
					break;
				case "AACPacket":
					for (var i in Pos2) {
						mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + Pos2[i], mc.thePlayer.posZ, false));
					}
					break;
				case "AACPacket2":
					for (var i in Pos4){
						mc.thePlayer.sendQueue,addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.PosY + Pos4[i], mc.thePlayer.posZ, false))
					}
				case "AACPacket3":
					for (var i in Pos5){
						mc.thePlayer.sendQueue,addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.PosY + Pos5[i], mc.thePlayer.posZ, false))
					}
					break;
				case "HYTPacket":
					for (var i in Pos6){
						mc.thePlayer.sendQueue,addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.PosY + Pos6[i], mc.thePlayer.posZ, false))
					}
					break;
				case "Render":
					mc.thePlayer.onCriticalHit(entity);
					break;
				case "AACNoGround":
					if(NoGroundJumpTicks = 0) {
						mc.thePlayer.jump
						NoGroundJumpTicks++;
					}else{
						if(mc.thePlayer.onGround){
							NoGroundPacketing = 1;
						}else{
							NoGroundPacketing = 0;
						}
					}
					if(NoGroundPacketing = 1){
						var packet = event.getPacket();
						if (packet instanceof C03PacketPlayer) {
						    packet.onGround = false;
						}
					}
					break;
				case "HypixelPacket":
					for (var i in Pos3) {
						mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + Pos3[i], mc.thePlayer.posZ, false));
					}
					break;
			}
			Delay.reset();
		}
		
				target = event.getTargetEntity();
		if(mc.thePlayer.onGround) {
		switch(settings.Mode.get()) {
		case "Packet4":
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.08, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
		break;
		case "Hypixel31": // tried to remake what flux has as "Hypixel" mode but i think this is patched on Hypixel
	    	shit++;
		    if(shit == settings.Soul.get()) { 
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.001, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
		    }
		    if(shit >= 5) {
			shit = 0;
		    }
		break;
		case "Hop3":
			mc.thePlayer.motionY = 0.10;
		break;
		case "Matrix2":
		    if(mc.thePlayer.motionX == 0.0 && mc.thePlayer.motionZ == 0.0) {
		    	mc.thePlayer.motionY = 0.20;
		    }
		break;
		case "Spartan4":
		    shit++;
		    if(shit == settings.Soul.get()) { 
		    	mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.04, mc.thePlayer.posZ, true))
		    	mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
		    }
		    if(shit >= 10) {
			shit = 0;
		    }
		break;
		case "Horizon4":
		if(mc.thePlayer.motionX == 0.0 && mc.thePlayer.motionZ == 0.0) {
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.00000000255, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
		}
		
		break;
		case "Custom2":
			mc.thePlayer.motionY = settings.MotionY.get();
		break;
		case "New":
		mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + newy1, mc.thePlayer.posZ, true))
		mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
		    }
		break;
		case "Flux2":
		    shit++;
		    if(shit == settings.Soul.get()) { 
			mc.thePlayer.sendQueue.addToSendQueue(new C03PacketPlayer.C04PacketPlayerPosition(ma.thePlayer.posX, mc.thePlayer.posY + 0.001, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C03PacketPlayer.C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
			mc.thePlayer.sendQueue.addToSendQueue(new C03PacketPlayer.C04PacketPlayerPosition(ma.thePlayer.posX, mc.thePlayer.posY + 0.001, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C03PacketPlayer.C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
			mc.thePlayer.sendQueue.addToSendQueue(new C03PacketPlayer.C04PacketPlayerPosition(ma.thePlayer.posX, mc.thePlayer.posY + 0.001, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C03PacketPlayer.C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
			}
		    if(shit >= 5) {
			shit = 0;
		    }
		break;
		case "RemixPacket":
		shit++
		if(shit == settings.Soul.get()) {
		var Remixcrit = new  Array(0.051, 0.0, 0.0125, 0.0);
		var Remixcrit1 = Remixcrit.length;
		var Remixcrit2 = 0;
	   	while (Remixcrit2 < Remixcrit1){
			var Remixoffset = Remixcrit[Remixcrit2];
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + Remixoffset, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
			++Remixcrit2
		}
		}
		if(shit >= settings.Delay.get()) {
			shit = 0;
	     	}
		break;
		case "ZeroDayPacket":
		shit++
		if(shit == settings.Soul.get()) {
		var Zerocrit = new  Array(0.051, 0.0, 0.0125, 0.0);
		var Zerocrit1 = Zerocrit.length;
		var Zerocrit2 = 0;
	   	while (Zerocrit2 < Zerocrit1){
			var Zerooffset = Zerocrit[Zerocrit2];
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + Zerooffset, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
			++Zerocrit2
		}
		}
		if(shit >= settings.Delay.get()) {
			shit = 0;
		}
		break;
		case "Miracle":
		shit++;
		if(shit == settings.Soul.get()) { 
		var crit = new  Array(0.4642, 0.0 ,0.005 , 0.0);
		var crit1 = crit.length;
		var crit2 = 0;
	   	while (crit2 < crit1){
			var offset = crit[crit2];
			mc.thePlayer.sendQueue.addToSendQueue(new C03PacketPlayer.C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + offset, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.005, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
			++crit2
		}
		}
		if(shit >= settings.Delay.get()) {
			shit = 0;
		}
		break;
		case "Luna":
		shit++;
		if(shit == settings.Soul.get()) { 
		var Lcrit = new  Array(0, 0.0622, 0);
		var Lcrit1 = crit.length;
		var Lcrit2 = 0;
	   	while (Lcrit2 < Lcrit1){
			var Loffset = Lcrit[Lcrit2];
			mc.thePlayer.sendQueue.addToSendQueue(new C03PacketPlayer.C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + Loffset, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
			mc.thePlayer.sendQueue.addToSendQueue(new C03PacketPlayer.C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.06, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
			mc.thePlayer.sendQueue.addToSendQueue(new C03PacketPlayer.C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.017711, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
			mc.thePlayer.sendQueue.addToSendQueue(new C03PacketPlayer.C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.0627, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
			mc.thePlayer.sendQueue.addToSendQueue(new C03PacketPlayer.C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.0627, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
			++Lcrit2
		}
		}
		if(shit >= settings.Delay.get()) {
			shit = 0;
		}
		break;
		case "Health":
		shit++;
		if(shit == settings.Soul.get()) { 
		var Healthcrit = new  Array(0.07, 0.0, 1.0-4, 0.0);
		var Healthcrit1 = crit.length;
		var Healthcrit2 = 0;
	   	while (Healthcrit2 < Healthcrit1){
			var Healthoffset = Healthcrit[Healthcrit2];
			mc.thePlayer.sendQueue.addToSendQueue(new C03PacketPlayer.C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + Healthoffset, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
			++Healthcrit2
		}
		}
		if(shit >= settings.Delay.get()) {
			shit = 0;
		}
		break;
		case "Leain":
		shit++;
		if(shit == settings.Soul.get()) { 
		var Leaincrit = new  Array(0.0625);
		var Leaincrit1 = Leaincrit.length;
		var Leaincrit2 = 0;
		while (Leaincrit2 < Leaincrit1){
			var Leainoffset = Leaincrit[Leaincrit2];
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + Leainoffset, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.001, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
			++Leaincrit2
		}
		}
		if(shit >= settings.Delay.get()) {
			shit = 0;
		}
		break;
		case "OldPacket":
		shit++;
		if(shit == settings.Soul.get()) { 
		var OPcrit = new  Array(0.05954835722479834, 0.05943483573247983, 0.01354835722479834);
		var OPcrit1 = OPcrit.length;
		var OPcrit2 = 0;
		while (OPcrit2 < OPcrit1){
			var OPoffset = OPcrit[OPcrit2];
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + OPoffset, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
			++OPcrit2
		}
		}
		if(shit >= settings.Delay.get()) {
			shit = 0;
		}
		break;
		case "ZNmRt-Bounce":
		    if(mc.thePlayer.motionX == 0.0 && mc.thePlayer.motionZ == 0.0) {
		    	mc.thePlayer.motionY = 0.65; //0.05 worked before maybe i was glitched idk
		}
		break;
		case "Nivia":
		shit++;
		if(shit == settings.Soul.get()) { 
		var Ncrit = new  Array(0.01);
		var Ncrit1 = Ncrit.length;
		var Ncrit2 = 0;
		while (Ncrit2 < Ncrit1){
			var Noffset = Ncrit[Ncrit2];
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + Noffset, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
			++Ncrit2
		}
		}
		if(shit >= settings.Delay.get()) {
			shit = 0;
		}
		break;
		}
		}
				}
				
	var newy1 = 0;
	this.onMotion = function() {
		if(settings.NewDiv.get() == true) {
			newy1 = settings.NewY.get() / 10;
		} else {
			newy1 = settings.NewY.get();
		}
	}

	this.onPacket = function(event) {
        var packet = event.getPacket()
        if(packet instanceof C03 && (settings.Mode.get() == "NoGround3" || settings.Mode.get() == "Redesky")) {
            if(mc.thePlayer.onGround) {
                packet.onGround = false;
                if(settings.Mode.get() == "Redesky") {
                    if(packet instanceof C04) {
                        packet.y += 0.000001;
                    }
                    if(packet instanceof C06) {
                        packet.y += 0.000001;
                    }
                }
            }
            if(mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(
                    0, (mc.thePlayer.motionY - 0.08) * 0.98, 0).expand(0, 0, 0)).isEmpty() && settings.Mode.get() == "Redesky") {
                packet.onGround = true;
            }
        }
		var packet = event.getPacket()
        if(packet instanceof C03PacketPlayer && settings.Mode.get() == "NoGround3") {
            packet.onGround = false
        }
		
		if(settings.Mode.get() == "NoGround2") {
		var packet = event.getPacket();
		if(packet instanceof C03PacketPlayer) {
			packet.onGround = false;
		}
		}
    }
	
	this.addValues = function (values) {
		for (var i in settings) {
		    values.add(settings[i]);
			}
		}
	}

var sb = new sb();
var sb;
	
function onLoad() {}

function onEnable() {
sbclient = moduleManager.registerModule(sb);
}

function onDisable() {
moduleManager.unregisterModule(sb);
}
