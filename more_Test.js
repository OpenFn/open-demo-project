function bin16dec(bin) {
  let num=bin&0xFFFF;
  if (0x8000 & num)
    num = - (0x010000 - num);
  return num;
}

function bin8dec(bin) {
  let num=bin&0xFF;
  if (0x80 & num)
    num = - (0x0100 - num);
  return num;
}

const TYPE_TEMP         = 0x01;
const TYPE_RH           = 0x02;
const TYPE_ACC          = 0x03;
const TYPE_LIGHT        = 0x04;
const TYPE_MOTION       = 0x05;
const TYPE_CO2          = 0x06;
const TYPE_VDD          = 0x07;
const TYPE_ANALOG1      = 0x08;
const TYPE_GPS          = 0x09;
const TYPE_PULSE1       = 0x0A;
const TYPE_PULSE1_ABS   = 0x0B;
const TYPE_EXT_TEMP1    = 0x0C;
const TYPE_EXT_DIGITAL  = 0x0D;
const TYPE_EXT_DISTANCE = 0x0E;
const TYPE_ACC_MOTION   = 0x0F;
const TYPE_IR_TEMP      = 0x10;
const TYPE_OCCUPANCY    = 0x11;
const TYPE_WATERLEAK    = 0x12;
const TYPE_GRIDEYE      = 0x13;
const TYPE_PRESSURE     = 0x14;
const TYPE_SOUND        = 0x15;
const TYPE_PULSE2       = 0x16;
const TYPE_PULSE2_ABS   = 0x17;
const TYPE_ANALOG2      = 0x18;
const TYPE_EXT_TEMP2    = 0x19;


function decode(payload) {
  // decode a payload/array of bytes and return a json with your data

  /*
  * You MUST return an object that respects the formats defined in this document: https://www.google.com
  */
  let data = payload;
  let obj = {};

  for(i=0;i<data.length;i++){
    switch(data[i]){
      case TYPE_TEMP:
        let temp=(data[i+1]<<8)|(data[i+2]);
        temp=bin16dec(temp);
        obj.temperature=temp/10;
        i+=2;
        break;

      case TYPE_RH:
        let rh=(data[i+1]);
        obj.humidity=rh;
        i+=1;
        break;

      case TYPE_ACC:
        obj.x=bin8dec(data[i+1]);
        obj.y=bin8dec(data[i+2]);
        obj.z=bin8dec(data[i+3]);
        i+=3;
        break;

      case TYPE_LIGHT:
        obj.light=(data[i+1]<<8)|(data[i+2]);
        i+=2;
        break;

      case TYPE_MOTION:
        obj.motion=(data[i+1]);
        i+=1;
        break;

      case TYPE_CO2:
        obj.co2=(data[i+1]<<8)|(data[i+2]);
        i+=2;
        break;

      case TYPE_VDD:
        obj.vdd=(data[i+1]<<8)|(data[i+2]);
        i+=2;
        break;

      case TYPE_ANALOG1:
        obj.analog1=(data[i+1]<<8)|(data[i+2]);
        i+=2;
        break;

      case TYPE_GPS:
        obj.lat=(data[i+1]<<16)|(data[i+2]<<8)|(data[i+3]);
        obj.long=(data[i+4]<<16)|(data[i+5]<<8)|(data[i+6]);
        i+=6;
        break;

      case TYPE_PULSE1:
        obj.pulse1=(data[i+1]<<8)|(data[i+2]);
        i+=2;
        break;

      case TYPE_PULSE1_ABS:
        let pulseAbs=(data[i+1]<<24)|(data[i+2]<<16)|(data[i+3]<<8)|(data[i+4]);
        obj.pulseAbs=pulseAbs;
        i+=4;
        break;

      case TYPE_EXT_TEMP1:
        temp=(data[i+1]<<8)|(data[i+2]);
        temp=bin16dec(temp);
        obj.externalTemperature=temp/10;
        i+=2;
        break;

      case TYPE_EXT_DIGITAL:
        obj.digital=(data[i+1]);
        i+=1;
        break;

      case TYPE_EXT_DISTANCE:
        obj.distance=(data[i+1]<<8)|(data[i+2]);
        i+=2;
        break;

      case TYPE_ACC_MOTION:
        obj.accMotion=(data[i+1]);
        i+=1;
        break;

      case TYPE_IR_TEMP:
        let iTemp=(data[i+1]<<8)|(data[i+2]);
        iTemp=bin16dec(iTemp);
        let eTemp=(data[i+3]<<8)|(data[i+4]);
        eTemp=bin16dec(eTemp);
        obj.irInternalTemperature=iTemp/10;
        obj.irExternalTemperature=eTemp/10;
        i+=4;
        break;

      case TYPE_OCCUPANCY:
        obj.occupancy=(data[i+1]);
        i+=1;
        break;

      case TYPE_WATERLEAK:
        obj.waterleak=(data[i+1]);
        i+=1;
        break;

      case TYPE_GRIDEYE:
        i+=65;
        break;

      case TYPE_PRESSURE:
        temp=(data[i+1]<<24)|(data[i+2]<<16)|(data[i+3]<<8)|(data[i+4]);
        obj.pressure=temp/1000;
        i+=4;
        break;

      case TYPE_SOUND:
        obj.soundPeak=data[i+1];
        obj.soundAvg=data[i+2];
        i+=2;
        break;

      case TYPE_PULSE2:
        obj.pulse2=(data[i+1]<<8)|(data[i+2]);
        i+=2;
        break;

      case TYPE_PULSE2_ABS:
        obj.pulseAbs2=(data[i+1]<<24)|(data[i+2]<<16)|(data[i+3]<<8)|(data[i+4]);
        i+=4;
        break;

      case TYPE_ANALOG2:
        obj.analog2=(data[i+1]<<8)|(data[i+2]);
        i+=2;
        break;

      case TYPE_EXT_TEMP2:
        temp=(data[i+1]<<8)|(data[i+2]);
        temp=bin16dec(temp);
        obj.externalTemperature2=temp/10;
        i+=2;
        break;

      default:
        i=data.length;
        break;
    }
  }

  return JSON.stringify(obj);
}