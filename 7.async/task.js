class  AlarmClock {
  constructor(alarmCollection) {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if(time === undefined || time === null || callback === null || callback === undefined) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    if(this.alarmCollection.includes(time)) {
      console.warn('Уже присутствует звонок на это же время');
    }
    this.alarmCollection.push({callback:callback, time:time, canCall:true});
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time != time);
  } 

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  start() {
    if(this.intervalId === null) {
      this.intervalId = setInterval(() => this.alarmCollection.forEach(alarm => {
        if (alarm.time == this.getCurrentFormattedTime() && alarm.canCall) {
          alarm.canCall = false;
          eval(alarm.callback)();
      }}), 1000)
    } 
  }


  stop() {
    clearInterval(this.intervalId)
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(alarm => alarm.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}