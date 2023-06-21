var scriptName = "zenosCombo3";
var scriptVersion = 3.2;
var scriptAuthor = "zxczenos138";

this.getName = function () {
        return "zenosCombo3";
    }

    this.getDescription = function () {
        return "zenosCombo3Module,by zenos.";
    }

    this.getCategory = function () {
        return "Misc";
    }

function AutoGapple()
        var Mode = value.createList("Mode", ["ZN", "MT", "Matrix", "Matrix2", "AAC", "ZNmRt"]
     delay: setting.float("Delay", 0, 0, 200),
     hurttime: setting.integer("HurtTime", 0, 0, 42),
     packets: setting.float("Packets", 0.55, 0, 200),
     Soul: setting. integer("Soul",5,0,15),
     Delay: setting.integer("Delay",10,0,42),
     OnlyAura: setting.boolean("OnlyAura", true)
    }
  break;
	case "ZN": // tried to remake what ZN has as "Hypixel" mode but i think this is patched on Hypixel
	    	shit++;
		    if(shit == 1) { 
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.001, mc.thePlayer.posZ, true))
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))
		    }
		    if(shit >= 5) {
			shit = 0;
		    }
        
  break;
	case "MT":
		    if(mc.thePlayer.motionX == 0.0 && mc.thePlayer.motionZ == 0.0) {
		    	mc.thePlayer.motionY = 0.42; //0.08 worked before maybe i was glitched idk
		    }
        
                     case "AAC":
					                   for (var i in Pos2) {
						                         mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + Pos2[i], mc.thePlayer.posZ, false));
					                   }
                     break;
                     case "Matrix2":
                         if(mc.thePlayer.motionX == 0 && mc.thePlayer.motionZ == 0) {
                             mc.thePlayer.motionY = 0.231
                         }
                     break;
		                 case "Matrix":
		                     if(mc.thePlayer.motionX == 0.0 && mc.thePlayer.motionZ == 0.0) {
		    	                   mc.thePlayer.motionY = 0.24; //0.05 worked before maybe i was glitched idk
		                     }
        
  break;
	case "ZNmRt":
			mc.thePlayer.motionY = settings.MotionY.get();
		break;
		}
		}
		
				var entity = event.getTargetEntity();
		if (entity instanceof EntityLivingBase && !(Timer.get() > 0 && !Delay.hasTimePassed(settings.Timer.get())) && (settings.Mode.get() == 'CriticalsHIT' || mc.thePlayer.onGround && !mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(0, -0.05, 0)).isEmpty()) && (entity.hurtTime == 0 || entity.hurtTime >= 4)) {
			switch (settings.Mode.get()) {
