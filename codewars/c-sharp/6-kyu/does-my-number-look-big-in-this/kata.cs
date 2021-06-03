using System;
using System.Collections.Generic;

public class Kata
{
  public static bool Narcissistic(int value)
  {
    var origValue = value;
    var numList = new List<int>();
    
    while (value != 0) {
      numList.Insert(0, value % 10);
      value = value / 10;
    }
    
    var exp = numList.Count;
    var total = 0;
    
    foreach (var val in numList) {
      total += (int) Math.Pow(val,exp);
    }
    
    return total == origValue;
  }
}