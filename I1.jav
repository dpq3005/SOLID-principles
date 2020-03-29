public interface Website{
  void orderFood();
  void view();
}
public class PizzaWebsite implements Website{
    void orderFood();
    void view();
}
public class Blog implements Website{
    //void orderFood();
    void view();
}