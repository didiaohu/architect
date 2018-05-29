// import Vue from 'vue'
import vuexIndex from '@/store/index'

/**
 * 抽象中介者
 */
class Mediator {
  /**
   * 一个示例操作
   *
   * @param colleague 发送消息的同事类
   * @param message 消息内容
   */
  operate(){
      throw new Error("This method must be overwritten!");
  }
}

/**
*具体中介者
*/
class ConcreteMediator extends Mediator {
  constructor() {
      super();
      // 持有的具体同事类
      this.firstColleague = new FirstColleague(this),
      this.secondColleague = new SecondColleague(this);
  }
  operate(colleague, message) {
      // 同事类之间的交互通过中介者进行。
      // 这里只演示了两个同事类。
      if(colleague instanceof FirstColleague){
          this.firstColleague.receive(message);
      } else if(colleague instanceof SecondColleague) {
          this.secondColleague .receive(message);
      }
  }
}

/**
* 抽象同事类，如果类，如果具体的同事类之间没有公共的行为，其实可以不用抽象同事类。
*/
class AbstractColleague {
  constructor(mediator) {
      this._mediator = mediator;
  }
  send() {
      throw new Error("This method must be overwritten!");
  }
  receive() {
      throw new Error("This method must be overwritten!");
  }
}

/**
* 具体同事类
*/
class FirstColleague extends AbstractColleague{
  constructor(mediator) {
      super(mediator);
  }
  // 向中介者发送消息。
  send(message){
      this._mediator.operate(this, message);
  }
  // 从中介者接收到的消息。
  receive(message){
      // console.log("First Colleague 收到消息：" + message);
      vuexIndex.dispatch('getHomeToProduct',message);
  }
}

/**
* 具体同事类
*/
class SecondColleague extends AbstractColleague {
  constructor(mediator) {
      super(mediator);
  }
  // 向中介者发送消息。
  send(message) {
      this._mediator.operate(this, message);
  }
  // 从中介者接收到的消息。
  receive(message) {
      // console.log("Second Colleague 收到消息：" + message);
      vuexIndex.dispatch('getProductToHome',message)
  }
}

// 把同事类注册到中介者
let mediator = new ConcreteMediator();
export const firstColleague = new FirstColleague(mediator);
export const secondColleague = new SecondColleague(mediator);
// 同事类之间通过中介者交互

// firstColleague.send("Hello World");
// secondColleague.send("Word Count");

