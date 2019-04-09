    $(document).ready(function () {
    	
      $("#closebtn").click(function () {
          $("#dlg").hide('800', "swing", function () { $("#bkg").fadeOut("500"); });
      });
      $("#closebtn2").click(function () {
          $("#dlg2").hide('800', "swing", function () { $("#bkg2").fadeOut("500"); });
        });
      $("#closebtn3").click(function () {
          $("#dlg3").hide('800', "swing", function () { $("#bkg3").fadeOut("500"); });
        });
      $("#closebtn4").click(function () {
          $("#dlg4").hide('800', "swing", function () { $("#bkg4").fadeOut("500"); });
        });
      $("#closebtn5").click(function () {
          $("#dlg5").hide('800', "swing", function () { $("#bkg5").fadeOut("500"); });
        });
      $("#closebtn6").click(function () {
          $("#dlg6").hide('800', "swing", function () { $("#bkg6").fadeOut("500"); });
        });
      $("#closebtn7").click(function () {
          $("#dlg7").hide('800', "swing", function () { $("#bkg7").fadeOut("500"); });
      });
      $("#closebtn8").click(function () {
          $("#dlg8").hide('800', "swing", function () { $("#bkg8").fadeOut("500"); });
      });
      
      
      
      $("#closebtn_d").click(function () {
          $("#dlg_d").hide('800', "swing", function () { $("#bkg_d").fadeOut("500"); });
      });
      $("#closebtn_d2").click(function () {
          $("#dlg_d2").hide('800', "swing", function () { $("#bkg_d2").fadeOut("500"); });
        });
      $("#closebtn_d3").click(function () {
          $("#dlg_d3").hide('800', "swing", function () { $("#bkg_d3").fadeOut("500"); });
        });
      $("#closebtn_d4").click(function () {
          $("#dlg_d4").hide('800', "swing", function () { $("#bkg_d4").fadeOut("500"); });
        });
      $("#closebtn_d5").click(function () {
          $("#dlg_d5").hide('800', "swing", function () { $("#bkg_d5").fadeOut("500"); });
        });
      $("#closebtn_d6").click(function () {
          $("#dlg_d6").hide('800', "swing", function () { $("#bkg_d6").fadeOut("500"); });
        });
      $("#closebtn_d7").click(function () {
          $("#dlg_d7").hide('800', "swing", function () { $("#bkg_d7").fadeOut("500"); });
      });
      $("#closebtn_d8").click(function () {
          $("#dlg_d8").hide('800', "swing", function () { $("#bkg_d8").fadeOut("500"); });
      });
      $("#closebtn_d9").click(function () {
          $("#dlg_d9").hide('800', "swing", function () { $("#bkg_d9").fadeOut("500"); });
      });
      
      
      $("#closebtn_s").click(function () {
          $("#dlg_s").hide('800', "swing", function () { $("#bkg_s").fadeOut("500"); });
      });
      $("#closebtn_s2").click(function () {
          $("#dlg_s2").hide('800', "swing", function () { $("#bkg_s2").fadeOut("500"); });
        });
      $("#closebtn_s3").click(function () {
          $("#dlg_s3").hide('800', "swing", function () { $("#bkg_s3").fadeOut("500"); });
        });
      $("#closebtn_s4").click(function () {
          $("#dlg_s4").hide('800', "swing", function () { $("#bkg_s4").fadeOut("500"); });
        });
      $("#closebtn_s5").click(function () {
          $("#dlg_s5").hide('800', "swing", function () { $("#bkg_s5").fadeOut("500"); });
        });
      
      
      
      $("#opn").click(function () {
        if (document.getElementById('bkg').style.visibility == 'hidden') {
          document.getElementById('bkg').style.visibility = '';
          $("#bkg").hide();
        }
        if (document.getElementById('dlg').style.visibility == 'hidden') {
          document.getElementById('dlg').style.visibility = '';
          $("#dlg").hide();
        }
        $("#bkg").fadeIn(500, "linear", function () { $("#dlg").show(800, "swing"); });
      });
      $("#opn2").click(function () {
          if (document.getElementById('bkg2').style.visibility == 'hidden') {
            document.getElementById('bkg2').style.visibility = '';
            $("#bkg2").hide();
          }
          if (document.getElementById('dlg2').style.visibility == 'hidden') {
            document.getElementById('dlg2').style.visibility = '';
            $("#dlg2").hide();
          }
          $("#bkg2").fadeIn(500, "linear", function () { $("#dlg2").show(800, "swing"); });
        });
      $("#opn3").click(function () {
        if (document.getElementById('bkg3').style.visibility == 'hidden') {
          document.getElementById('bkg3').style.visibility = '';
          $("#bkg3").hide();
        }
        if (document.getElementById('dlg3').style.visibility == 'hidden') {
          document.getElementById('dlg3').style.visibility = '';
          $("#dlg3").hide();
        }
        $("#bkg3").fadeIn(500, "linear", function () { $("#dlg3").show(800, "swing"); });
      });
      $("#opn4").click(function () {
        if (document.getElementById('bkg4').style.visibility == 'hidden') {
          document.getElementById('bkg4').style.visibility = '';
          $("#bkg4").hide();
        }
        if (document.getElementById('dlg4').style.visibility == 'hidden') {
          document.getElementById('dlg4').style.visibility = '';
          $("#dlg4").hide();
        }
        $("#bkg4").fadeIn(500, "linear", function () { $("#dlg4").show(800, "swing"); });
      });
      $("#opn5").click(function () {
          if (document.getElementById('bkg5').style.visibility == 'hidden') {
            document.getElementById('bkg5').style.visibility = '';
            $("#bkg5").hide();
          }
          if (document.getElementById('dlg5').style.visibility == 'hidden') {
            document.getElementById('dlg5').style.visibility = '';
            $("#dlg5").hide();
          }
          $("#bkg5").fadeIn(500, "linear", function () { $("#dlg5").show(800, "swing"); });
        });
      $("#opn6").click(function () {
          if (document.getElementById('bkg6').style.visibility == 'hidden') {
            document.getElementById('bkg6').style.visibility = '';
            $("#bkg6").hide();
          }
          if (document.getElementById('dlg6').style.visibility == 'hidden') {
            document.getElementById('dlg6').style.visibility = '';
            $("#dlg6").hide();
          }
          $("#bkg6").fadeIn(500, "linear", function () { $("#dlg6").show(800, "swing"); });
        });
      $("#opn7").click(function () {
          if (document.getElementById('bkg7').style.visibility == 'hidden') {
            document.getElementById('bkg7').style.visibility = '';
            $("#bkg7").hide();
          }
          if (document.getElementById('dlg7').style.visibility == 'hidden') {
            document.getElementById('dlg7').style.visibility = '';
            $("#dlg7").hide();
          }
          $("#bkg7").fadeIn(500, "linear", function () { $("#dlg7").show(800, "swing"); });
        });
      $("#opn8").click(function () {
          if (document.getElementById('bkg8').style.visibility == 'hidden') {
            document.getElementById('bkg8').style.visibility = '';
            $("#bkg8").hide();
          }
          if (document.getElementById('dlg8').style.visibility == 'hidden') {
            document.getElementById('dlg8').style.visibility = '';
            $("#dlg8").hide();
          }
          $("#bkg8").fadeIn(500, "linear", function () { $("#dlg8").show(800, "swing"); });
        });
      
      
      $("#opn_d").click(function () {
          if (document.getElementById('bkg_d').style.visibility == 'hidden') {
            document.getElementById('bkg_d').style.visibility = '';
            $("#bkg_d").hide();
          }
          if (document.getElementById('dlg_d').style.visibility == 'hidden') {
            document.getElementById('dlg_d').style.visibility = '';
            $("#dlg_d").hide();
          }
          $("#bkg_d").fadeIn(500, "linear", function () { $("#dlg_d").show(800, "swing"); });
        });
        $("#opn_d2").click(function () {
            if (document.getElementById('bkg_d2').style.visibility == 'hidden') {
              document.getElementById('bkg_d2').style.visibility = '';
              $("#bkg_d2").hide();
            }
            if (document.getElementById('dlg_d2').style.visibility == 'hidden') {
              document.getElementById('dlg_d2').style.visibility = '';
              $("#dlg_d2").hide();
            }
            $("#bkg_d2").fadeIn(500, "linear", function () { $("#dlg_d2").show(800, "swing"); });
          });
        $("#opn_d3").click(function () {
          if (document.getElementById('bkg_d3').style.visibility == 'hidden') {
            document.getElementById('bkg_d3').style.visibility = '';
            $("#bkg_d3").hide();
          }
          if (document.getElementById('dlg_d3').style.visibility == 'hidden') {
            document.getElementById('dlg_d3').style.visibility = '';
            $("#dlg_d3").hide();
          }
          $("#bkg_d3").fadeIn(500, "linear", function () { $("#dlg_d3").show(800, "swing"); });
        });
        $("#opn_d4").click(function () {
          if (document.getElementById('bkg_d4').style.visibility == 'hidden') {
            document.getElementById('bkg_d4').style.visibility = '';
            $("#bkg_d4").hide();
          }
          if (document.getElementById('dlg_d4').style.visibility == 'hidden') {
            document.getElementById('dlg_d4').style.visibility = '';
            $("#dlg_d4").hide();
          }
          $("#bkg_d4").fadeIn(500, "linear", function () { $("#dlg_d4").show(800, "swing"); });
        });
        $("#opn_d5").click(function () {
            if (document.getElementById('bkg_d5').style.visibility == 'hidden') {
              document.getElementById('bkg_d5').style.visibility = '';
              $("#bkg_d5").hide();
            }
            if (document.getElementById('dlg_d5').style.visibility == 'hidden') {
              document.getElementById('dlg_d5').style.visibility = '';
              $("#dlg_d5").hide();
            }
            $("#bkg_d5").fadeIn(500, "linear", function () { $("#dlg_d5").show(800, "swing"); });
          });
        $("#opn_d6").click(function () {
            if (document.getElementById('bkg_d6').style.visibility == 'hidden') {
              document.getElementById('bkg_d6').style.visibility = '';
              $("#bkg_d6").hide();
            }
            if (document.getElementById('dlg_d6').style.visibility == 'hidden') {
              document.getElementById('dlg_d6').style.visibility = '';
              $("#dlg_d6").hide();
            }
            $("#bkg_d6").fadeIn(500, "linear", function () { $("#dlg_d6").show(800, "swing"); });
          });
        $("#opn_d7").click(function () {
            if (document.getElementById('bkg_d7').style.visibility == 'hidden') {
              document.getElementById('bkg_d7').style.visibility = '';
              $("#bkg_d7").hide();
            }
            if (document.getElementById('dlg_d7').style.visibility == 'hidden') {
              document.getElementById('dlg_d7').style.visibility = '';
              $("#dlg_d7").hide();
            }
            $("#bkg_d7").fadeIn(500, "linear", function () { $("#dlg_d7").show(800, "swing"); });
          });
        $("#opn_d8").click(function () {
            if (document.getElementById('bkg_d8').style.visibility == 'hidden') {
              document.getElementById('bkg_d8').style.visibility = '';
              $("#bkg_d8").hide();
            }
            if (document.getElementById('dlg_d8').style.visibility == 'hidden') {
              document.getElementById('dlg_d8').style.visibility = '';
              $("#dlg_d8").hide();
            }
            $("#bkg_d8").fadeIn(500, "linear", function () { $("#dlg_d8").show(800, "swing"); });
          });
        $("#opn_d9").click(function () {
            if (document.getElementById('bkg_d9').style.visibility == 'hidden') {
              document.getElementById('bkg_d9').style.visibility = '';
              $("#bkg_d9").hide();
            }
            if (document.getElementById('dlg_d9').style.visibility == 'hidden') {
              document.getElementById('dlg_d9').style.visibility = '';
              $("#dlg_d9").hide();
            }
            $("#bkg_d9").fadeIn(500, "linear", function () { $("#dlg_d9").show(800, "swing"); });
          });
        
        
        $("#opn_s").click(function () {
            if (document.getElementById('bkg_s').style.visibility == 'hidden') {
              document.getElementById('bkg_s').style.visibility = '';
              $("#bkg_s").hide();
            }
            if (document.getElementById('dlg_s').style.visibility == 'hidden') {
              document.getElementById('dlg_s').style.visibility = '';
              $("#dlg_s").hide();
            }
            $("#bkg_s").fadeIn(500, "linear", function () { $("#dlg_s").show(800, "swing"); });
          });
          $("#opn_s2").click(function () {
              if (document.getElementById('bkg_s2').style.visibility == 'hidden') {
                document.getElementById('bkg_s2').style.visibility = '';
                $("#bkg_s2").hide();
              }
              if (document.getElementById('dlg_s2').style.visibility == 'hidden') {
                document.getElementById('dlg_s2').style.visibility = '';
                $("#dlg_s2").hide();
              }
              $("#bkg_s2").fadeIn(500, "linear", function () { $("#dlg_s2").show(800, "swing"); });
            });
          $("#opn_s3").click(function () {
            if (document.getElementById('bkg_s3').style.visibility == 'hidden') {
              document.getElementById('bkg_s3').style.visibility = '';
              $("#bkg_s3").hide();
            }
            if (document.getElementById('dlg_s3').style.visibility == 'hidden') {
              document.getElementById('dlg_s3').style.visibility = '';
              $("#dlg_s3").hide();
            }
            $("#bkg_s3").fadeIn(500, "linear", function () { $("#dlg_s3").show(800, "swing"); });
          });
          $("#opn_s4").click(function () {
            if (document.getElementById('bkg_s4').style.visibility == 'hidden') {
              document.getElementById('bkg_s4').style.visibility = '';
              $("#bkg_s4").hide();
            }
            if (document.getElementById('dlg_s4').style.visibility == 'hidden') {
              document.getElementById('dlg_s4').style.visibility = '';
              $("#dlg_s4").hide();
            }
            $("#bkg_s4").fadeIn(500, "linear", function () { $("#dlg_s4").show(800, "swing"); });
          });
          $("#opn_s5").click(function () {
              if (document.getElementById('bkg_s5').style.visibility == 'hidden') {
                document.getElementById('bkg_s5').style.visibility = '';
                $("#bkg_s5").hide();
              }
              if (document.getElementById('dlg_s5').style.visibility == 'hidden') {
                document.getElementById('dlg_s5').style.visibility = '';
                $("#dlg_s5").hide();
              }
              $("#bkg_s5").fadeIn(500, "linear", function () { $("#dlg_s5").show(800, "swing"); });
            });

    });
    