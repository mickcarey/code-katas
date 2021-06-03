using System;

public class RomanConvert
{
  public static string Solution(int n)
  {
    var output = "";
    var index = 0;
    var unit = 1000;
    
    var letters = new char[7];
    var unitCounters = new int[7];
    
    while (n != 0) {
      letters[index] = ConvertNumberToLetter(unit);
      
      unitCounters[index] = (int) n / unit;
      n = (int) n % unit;
      
      if (index % 2 == 0)
      {
        unit /= (int) 2;
        output += (index == 0) ?
          ProcessRomanNumerals(letters[index], unitCounters[index]) :
          ProcessRomanNumerals(letters[index], letters[index-1], letters[index-2], unitCounters[index], unitCounters[index-1]);
      }
      else
      {
        if (n == 0)
        {
          output += ProcessRomanNumerals(letters[index], unitCounters[index]);
        }
        else
        {
          unit /= (int) 5;
        }
      }
      
      index++;
    }
    
    return output;
  }
  
  private static string ProcessRomanNumerals(
    char lowerLetter, 
    char middleLetter, 
    char higherLetter, 
    int lowerCount, 
    int middleCount
  )
  {
    if (middleCount == 1) 
    {
      if (lowerCount == 0)
      {
        return new String(middleLetter, middleCount);
      }
      else if (lowerCount <= 3)
      {
        return new String(middleLetter, middleCount) + new String(lowerLetter, lowerCount);
      }
      else
      {
        return new String(lowerLetter, 1) + new String(higherLetter, 1);
      }
    } 
    else
    {
      if (lowerCount <= 3)
      {
        return new String(lowerLetter, lowerCount);
      }
      else
      {
        return new String(lowerLetter, 1) + new String(middleLetter, 1);
      }
    }
  }
  
  private static string ProcessRomanNumerals(char letter, int count)
  {
    return (count >= 1) ? new String(letter, count) : "";
  }
  
  private static char ConvertNumberToLetter(int unit) {
    switch (unit)
    {
        case 1000:
          return 'M';
        case 500:
          return 'D';
        case 100:
          return 'C';
        case 50:
          return 'L';
        case 10:
          return 'X';
        case 5:
          return 'V';
        case 1:
        default:
          return 'I';
    }
  }
}