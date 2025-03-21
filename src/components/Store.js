// src/components/Store.js
import React, { useEffect, useRef } from 'react';

function Store() {
  const shopifyRef = useRef(null);
  const scriptLoadedRef = useRef(false); // NEW REF to track if script has been injected

  useEffect(() => {
    // If we've already run this script injection, do nothing
    if (scriptLoadedRef.current) return;
    scriptLoadedRef.current = true;

    // 1) Create separate container divs
    const containerDivBlack = document.createElement('div');
    containerDivBlack.id = 'product-component-1742516711009'; // Black shirt container

    const containerDivPink = document.createElement('div');
    containerDivPink.id = 'product-component-1742516920663'; // Pink shirt container

    // Append the two container divs into the store container
    if (shopifyRef.current) {
      shopifyRef.current.appendChild(containerDivBlack);
      shopifyRef.current.appendChild(containerDivPink);
    }

    // 2) Create ONE script to handle both products
    const scriptEl = document.createElement('script');
    scriptEl.type = 'text/javascript';
    scriptEl.innerHTML = `
      (function () {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

        if (window.ShopifyBuy) {
          if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
          } else {
            loadScript();
          }
        } else {
          loadScript();
        }

        function loadScript() {
          var script = document.createElement('script');
          script.async = true;
          script.src = scriptURL;
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
          script.onload = ShopifyBuyInit;
        }

        function ShopifyBuyInit() {
          var client = ShopifyBuy.buildClient({
            domain: 'unemployed-boys-club-byemalin.myshopify.com',
            storefrontAccessToken: 'c0e5dbc455c500c13a933624f86a33d5',
          });

          ShopifyBuy.UI.onReady(client).then(function (ui) {

            // ---- BLACK SHIRT ----
            ui.createComponent('product', {
              id: '15006484103512', // Black shirt product ID
              node: document.getElementById('product-component-1742516711009'),
              moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
              options: {
                "product": {
                  "styles": {
                    "product": {
                      "@media (min-width: 601px)": {
                        "max-width": "calc(25% - 20px)",
                        "margin-left": "20px",
                        "margin-bottom": "50px"
                      }
                    },
                    "button": {
                      ":hover": {
                        "background-color": "#000000"
                      },
                      "background-color": "#000000",
                      ":focus": {
                        "background-color": "#000000"
                      },
                      "padding-left": "45px",
                      "padding-right": "45px"
                    }
                  },
                  "text": {
                    "button": "Add to cart"
                  }
                },
                "productSet": {
                  "styles": {
                    "products": {
                      "@media (min-width: 601px)": {
                        "margin-left": "-20px"
                      }
                    }
                  }
                },
                "modalProduct": {
                  "contents": {
                    "img": false,
                    "imgWithCarousel": true,
                    "button": false,
                    "buttonWithQuantity": true
                  },
                  "styles": {
                    "product": {
                      "@media (min-width: 601px)": {
                        "max-width": "100%",
                        "margin-left": "0px",
                        "margin-bottom": "0px"
                      }
                    },
                    "button": {
                      ":hover": {
                        "background-color": "#000000"
                      },
                      "background-color": "#000000",
                      ":focus": {
                        "background-color": "#000000"
                      },
                      "padding-left": "45px",
                      "padding-right": "45px"
                    }
                  },
                  "text": {
                    "button": "Add to cart"
                  }
                },
                "option": {},
                "cart": {
                  "styles": {
                    "button": {
                      ":hover": {
                        "background-color": "#000000"
                      },
                      "background-color": "#000000",
                      ":focus": {
                        "background-color": "#000000"
                      }
                    }
                  },
                  "text": {
                    "total": "Subtotal",
                    "button": "Checkout"
                  }
                },
                "toggle": {
                  "styles": {
                    "toggle": {
                      "background-color": "#000000",
                      ":hover": {
                        "background-color": "#000000"
                      },
                      ":focus": {
                        "background-color": "#000000"
                      }
                    }
                  }
                }
              },
            });

            // ---- PINK SHIRT ----
            ui.createComponent('product', {
              id: '15006484922712', // Pink shirt product ID
              node: document.getElementById('product-component-1742516920663'),
              moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
              options: {
                "product": {
                  "styles": {
                    "product": {
                      "@media (min-width: 601px)": {
                        "max-width": "calc(25% - 20px)",
                        "margin-left": "20px",
                        "margin-bottom": "50px"
                      }
                    },
                    "button": {
                      ":hover": {
                        "background-color": "#000000"
                      },
                      "background-color": "#000000",
                      ":focus": {
                        "background-color": "#000000"
                      },
                      "padding-left": "45px",
                      "padding-right": "45px"
                    }
                  },
                  "text": {
                    "button": "Add to cart"
                  }
                },
                "productSet": {
                  "styles": {
                    "products": {
                      "@media (min-width: 601px)": {
                        "margin-left": "-20px"
                      }
                    }
                  }
                },
                "modalProduct": {
                  "contents": {
                    "img": false,
                    "imgWithCarousel": true,
                    "button": false,
                    "buttonWithQuantity": true
                  },
                  "styles": {
                    "product": {
                      "@media (min-width: 601px)": {
                        "max-width": "100%",
                        "margin-left": "0px",
                        "margin-bottom": "0px"
                      }
                    },
                    "button": {
                      ":hover": {
                        "background-color": "#000000"
                      },
                      "background-color": "#000000",
                      ":focus": {
                        "background-color": "#000000"
                      },
                      "padding-left": "45px",
                      "padding-right": "45px"
                    }
                  },
                  "text": {
                    "button": "Add to cart"
                  }
                },
                "option": {},
                "cart": {
                  "styles": {
                    "button": {
                      ":hover": {
                        "background-color": "#000000"
                      },
                      "background-color": "#000000",
                      ":focus": {
                        "background-color": "#000000"
                      }
                    }
                  },
                  "text": {
                    "total": "Subtotal",
                    "button": "Checkout"
                  }
                },
                "toggle": {
                  "styles": {
                    "toggle": {
                      "background-color": "#000000",
                      ":hover": {
                        "background-color": "#000000"
                      },
                      ":focus": {
                        "background-color": "#000000"
                      }
                    }
                  }
                }
              },
            });
          });
        }
      })();
    `;

    // Finally, append the single script to load everything
    if (shopifyRef.current) {
      shopifyRef.current.appendChild(scriptEl);
    }
  }, []);

  return (
    <div>
      <h2>Our T-Shirts</h2>
      <div ref={shopifyRef} />
    </div>
  );
}

export default Store;
