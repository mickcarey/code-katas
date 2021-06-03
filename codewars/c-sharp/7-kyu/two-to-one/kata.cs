using System;
using System.Linq;
using System.Collections.Generic;

public class TwoToOne 
{
  public static string Longest (string s1, string s2) 
  {
    var letters1 = new String(s1.Distinct().ToArray());
    var letters2 = new String(s2.Distinct().ToArray());
    
    var distinctLetters = String.Concat(letters1, letters2);
    return String.Join("", distinctLetters.Distinct().OrderBy(l => l));
  }
}