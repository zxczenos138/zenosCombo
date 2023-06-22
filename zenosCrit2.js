var scriptName = "zenosCrit2"; 
var scriptVersion = 1.2; 
var scriptAuthor = "zxczenos138";

var autoGapple = new AutoGapple(); // it's totally autogapple 
var autoGappleClient;

var C03 = Java.type("net.minecraft.network.play.client.C03PacketPlayer")
var C04 = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition")
var C06 = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook")

function AutoGapple() {
	var Mode = value.createList("Mode", ["Packet", "Flux", "Hop", "Matrix", "Spartan", "AAC", "ZNmRt", "MatrixZ", "Matrix2", "Horizon", "Custom"], "Packet");
	var MotionY = value.createFloat("CustomMotionY", 0.05, 0.01, 3.1);
  var delay = value.createFloat("CustomDelay", 0, 0, 100)
  var packets = value.createFloat("Packets", 0.5, 0, 500)
  var hurttime = value.createInteger("CustomHurtTime", 10, 0, 20)
  var packety = value.createFloat("PacketY", 0.5, 0, 1)

    this.getName = function() {
        return "zenosCrit2";
    };

    this.getDescription = function() {
        return "More critical modes i guess.";
    };

    this.getCategory = function() {
        return "Combat";
    };
	this.onMotion = function() {
	}
	var shit = 0;
    this.onAttack = function (event) {
		if(mc.thePlayer.onGround) {
		switch(Mode.get()) {
		case "Packet":
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
		case "Hop":
			mc.thePlayer.motionY = 0.10;
		break;
		case "Matrix":
		    if(mc.thePlayer.motionX == 0.0 && mc.thePlayer.motionZ == 0.0) {
		    	mc.thePlayer.motionY = 0.20; //0.05 worked before maybe i was glitched idk
		    }
    break;
		case "MatrixZ":
		    if(mc.thePlayer.motionX == 0.0 && mc.thePlayer.motionZ == 0.0) {
		    	mc.thePlayer.motionY = 0.42; //0.05 worked before maybe i was glitched idk
		    }
    break;
		case "Matrix2":
		    if(mc.thePlayer.motionX == 0.0 && mc.thePlayer.motionZ == 0.0) {
		    	mc.thePlayer.motionY = 0.15; //0.05 worked before maybe i was glitched idk
		    }
		break;
		case "Spartan": // seems to work on Spartan on treeAC, every other hit is a critical
		    shit++;
		    if(shit == 1) { 
		    	mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.04, mc.thePlayer.posZ, true))
		    	mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
		    }
		    if(shit >= 10) {
			shit = 0;
		    }
    break;
		case "AAC":
			mc.thePlayer.motionY = 0.
    break;
    case "ZNmRt":
        if(mc.thePlayer.motionX == 0 && mc.thePlayer.motionZ == 0) {
          mc.thePlayer.motionY = 0.77
        }   
		break;
		case "Horizon": // it also seems to work on treeAC Horizon, maybe Horizon there is different?
		if(mc.thePlayer.motionX == 0.0 && mc.thePlayer.motionZ == 0.0) {
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.00000000255, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
		}
		
		break;
		case "Custom":
			mc.thePlayer.motionY = MotionY.get();
		break;
		}
		}
	}
	this.onDisable = function() {
		mc.timer.timerSpeed = 1.0;
		shit = 0;
	}
	this.addValues = function(values) {
		values.add(Mode);
		values.add(MotionY);
    }
}

function onLoad() {
};

function onEnable() {
    autoGappleClient = moduleManager.registerModule(autoGapple);
};

function onDisable() {
    moduleManager.unregisterModule(autoGappleClient);
};
