public interface FoodWebsite{
  void orderFood();
}
public interface Website{
  void view();
}
public class PizzaWebsite implements Website,FoodWebsite{
    void orderFood();
    void view();
}
public class Blog implements Website{
    void view();
}