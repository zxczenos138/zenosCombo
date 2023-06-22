var skriptName = "MaratCombo";
var skriptVersion = 0.7;
var skriptAuthor = "zxczenos138";

var EntityPlayer = Java.type('net.minecraft.entity.player.EntityPlayer');
var C04PacketPlayerPosition = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition');
var EntityPlayer = Java.type('net.minecraft.entity.player.EntityPlayer');
var C03PacketPlayer = Java.type('net.minecraft.network.play.client.C03PacketPlayer');
var C04PacketPlayerPosition = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition');
var C05PacketPlayerLook = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook");
var C06PacketPlayerPosLook = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook");
var S15PacketEntityRelMove = Java.type("net.minecraft.network.play.server.S14PacketEntity.S15PacketEntityRelMove");
var S17PacketEntityLookMove = Java.type("net.minecraft.network.play.server.S14PacketEntity.S17PacketEntityLookMove");

var C03 = Java.type("net.minecraft.network.play.client.C03PacketPlayer");
var C04 = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition");
var C06 = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook");

var C06PlayerPacket = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook');
var C06PlayerPacket = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook');
var C04PacketPlayerPosition = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition');
var C05PacketPlayerLook = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook');
var C03PacketPlayer = Java.type('net.minecraft.network.play.client.C03PacketPlayer');
var S08PacketPlayerPosLook = Java.type("net.minecraft.network.play.server.S08PacketPlayerPosLook");

var EntityPlayer = Java.type('net.minecraft.entity.player.EntityPlayer');
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
	Mode: setting.list("Mode", ["Matrix", "NPC", "Spartan" , "Matrix2", "Marat", "zenka-TPHop"], "Matrix"),
MotionY: setting.float("CustomMotionY", 0, 0, 1),
 delay: setting.float("Delay", 0, 0, 2000),
 hurttime: setting.integer("HurtTime", 0, 0, 20),
 packets: setting.float("Packets", 0.5, 0, 250),
 motiony: setting.float("MotionY", 0.77, 0, 0.77),
 Delay: setting.integer("Delay",3,0,22),    
         };  
this.getName = function() {
    return "MaratCombo";
    };
	
this.getDescription = function() {
    return "MaratComboAdd";
    };
	
this.getCategory = function() {
    return "Combat";
	  };
  
            var shit = 0;
this.onAttack = function (event) {
if(event.getTargetEntity() instanceof EntityPlayer){
		      entity = event.getTargetEntity();
	}
				                      switch(settings.Mode.get()) {
          break;
		      case "Matrix":
		          if(mc.thePlayer.motionX == 0.0 && mc.thePlayer.motionZ == 0.0) {
		    	        mc.thePlayer.motionY = 0.20; //0.05 worked before maybe i was glitched idk
		          }
          case "NCP":
              if(timer3.hasTimePassed(500) && target.hurtTime <= 8) {
                  mc.thePlayer.sendQueue.addToSendQueue(new C04(mc.thePlayer.posX, mc.thePlayer.posY + 0.11, mc.thePlayer.posZ, true))
                  mc.thePlayer.sendQueue.addToSendQueue(new C04(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
                  timer3.reset()
              }
          break;
          case "Spartan":
              if(timer.hasTimePassed(600)) {
                  mc.getNetHandler().addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.2, mc.thePlayer.posZ, true))
                  mc.getNetHandler().addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
                  mc.thePlayer.onCriticalHit(target)
                  timer.reset()
              }
 		      break;
		      case "Matrix2":
		          if(mc.thePlayer.motionX == 0.0 && mc.thePlayer.motionZ == 0.0) {
		    	       mc.thePlayer.motionY = 0.20;
		          }
          break;
		      case "Marat": // tried to remake what flux has as "Hypixel" mode but i think this is patched on Hypixel
	    	  shit++;
		          if(shit == 1) { 
			            mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.001, mc.thePlayer.posZ, true))
			            mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
		          }
		          if(shit >= 5) {
			            shit = 0;
		          }
          break;
          case "zenka-TPHop":
              if(mc.thePlayer.motionX == 0 && mc.thePlayer.motionZ == 0) {
                  mc.thePlayer.motionY = 0.269
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

















