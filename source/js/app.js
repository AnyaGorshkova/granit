document.addEventListener("DOMContentLoaded", function(){
  var simple = {};

  simple = {
    six: {
      w30: {
        h50: {
          pedestal: {
            hight: 1400,
            low: 900
          },
          flowerbed: {
            60: 2100,
            80: 2400,
            100: 3000,
            120: 3600
          },
          stella: 2100,
          plita: {

          },
          pplita: {

          }
      },
        h60: {
          pedestal: {
            hight: 1400,
            low: 900
          },
          flowerbed: {
            60: 2100,
            80: 2400,
            100: 3000,
            120: 3600
          },
          stella: 2900,
          plita: {

          },
          pplita: {
            
          }
        }
      },
      w40: {
        h60: {
          pedestal: {
            hight: 1900,
            low: 1100
          },
          flowerbed: {
            60: 2200,
            80: 2600,
            100: 3100,
            120: 3700
          },
          stella: 3600,
          plita: {

          },
          pplita: {
            
          }
        },
        h70: {
          pedestal: {
            hight: 1900,
            low: 1100
          },
          flowerbed: {
            60: 2200,
            80: 2600,
            100: 3100,
            120: 3700
          },
          stella: 3900,
          plita: {

          },
          pplita: {
            
          }
        },
        h80: {
          pedestal: {
            hight: 1900,
            low: 1100
          },
          flowerbed: {
            60: 2200,
            80: 2600,
            100: 3100,
            120: 3700
          },
          stella: 4600,
          plita: {

          },
          pplita: {
            
          }
        }
      },
      w45: {
        h90: {
          pedestal: {
            hight: 2000,
            low: 1300
          },
          flowerbed: {
            60: 2300,
            80: 2700,
            100: 3200,
            120: 3800
          },
          stella: 5200,
          plita: {

          },
          pplita: {
            
          }
        }
      },
      w50: {
        h90: {
          pedestal: {
            hight: 2100,
            low: 1400
          },
          flowerbed: {
            60: 2400,
            80: 2800,
            100: 3300,
            120: 3900
          },
          stella: 6000,
          plita: {

          },
          pplita: {
            
          }
        },
        h100: {
          pedestal: {
            hight: 2100,
            low: 1400
          },
          flowerbed: {
            60: 2400,
            80: 2800,
            100: 3300,
            120: 3900
          },
          stella: 6800,
          plita: {

          },
          pplita: {
            
          }
        },
        h110: {
          pedestal: {
            hight: 2100,
            low: 1400
          },
          flowerbed: {
            60: 2400,
            80: 2800,
            100: 3300,
            120: 3900
          },
          stella: 7000,
          plita: {

          },
          pplita: {
            
          }
        }
      },
      w60: {
        h100: {
          pedestal: {
            hight: 2800,
            low: 1700
          },
          flowerbed: {
            60: 2400,
            80: 2900,
            100: 3400,
            120: 4000
          },
          stella: 7100,
          plita: {

          },
          pplita: {
            
          }
        },
        h120: {
        }
      }
    }
    ,
    eight: {}
  }


// Определяем размер стеллы

var height = 0,
    width = 0,
    thickness = 0,
    heightButtons = document.querySelectorAll('input[name = "height"]'),
    widthButtons = document.querySelectorAll('input[name = "width"]'),
    thickButtons = document.querySelectorAll('input[name = "thickness"]'),
    sizeResult = document.querySelector('.height-result');
console.log(document.querySelector("input[name=width]"));
function showStellaSize() {
  sizeResult.innerHTML = document.querySelector("input[name=height]:checked").value + ' x ' + document.querySelector("input[name=width]:checked").value + ' x ' + document.querySelector("input[name=thickness]:checked").value;;
}

for (var i = 0, max = heightButtons.length; i < max; i++) {
  heightButtons[i].addEventListener('change', function(){
    showStellaSize();
  })
}

for (var i = 0, max = widthButtons.length; i < max; i++) {
  widthButtons[i].addEventListener('change', function(){
    showStellaSize();
  })
}

for (var i = 0, max = thickButtons.length; i < max; i++) {
  thickButtons[i].addEventListener('change', function(){
    showStellaSize();
  })
}

});