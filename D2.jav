interface MobilePhone(){
  public Call(){

  }
}
class SamsungA51 implements MobilePhone(){
  public Call(){

  }
}
class Iphone5S implements MobilePhone(){
  public Call(){
    
  }
}
class User(){
  MobilePhone mobile;
  User(MobilePhone m){
    this.mobile=m;
  }
  public surfWeb(){
    
  }
}