var scriptName = "zenosCrit"; 
var scriptVersion = 1.2; 
var scriptAuthor = "zxczenos138";

var autoGapple = new AutoGapple(); // it's totally autogapple 
var autoGappleClient;

function AutoGapple() {
	var Mode = value.createList("Mode", ["Packet", "Flux", "Hop", "Matrix", "Spartan", "AAC", "MatrixZ", "Matrix2", "Horizon", "Custom"], "Packet");
	var MotionY = value.createFloat("CustomMotionY", 0.05, 0.01, 0.50);

    this.getName = function() {
        return "zenosCrit";
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
			mc.thePlayer.motionY = 0.21;
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
