  function gcd(a, b) {
      if (!b) {
          return a;
      }

      return gcd(b, a % b);
  }

  gcd(14, 7);