jsonPWrapper ({
  "Features": [
    {
      "RelativeFolder": "Features\\Workflow\\ClearingScreen.feature",
      "Feature": {
        "Name": "Clearing Screen",
        "Description": "\tIn order to restart a new set of calculations\r\n\tAs a math idiot\r\n\tI want to be able to clear the screen",
        "FeatureElements": [
          {
            "Name": "Clear the screen",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have entered 50 into the calculator",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I have entered 70 into the calculator",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press C",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the screen should be empty",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@workflow",
              "@slow"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Features\\15Pickles\\InteractiveDHTMLView.feature",
      "Feature": {
        "Name": "Interactive DHTML View",
        "Description": "\tIn order to increase stakeholder engagement with pickled specs\r\n\tAs a SpecFlow evangelist  \r\n\tI want to adjust the level of detail in the DHTML view to suit my audience\r\n\tSo that I do not overwhelm them.",
        "FeatureElements": [
          {
            "Name": "Scenario with large data table",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "a feature with a large table of data:",
                "TableArgument": {
                  "HeaderRow": [
                    "heading",
                    "page #"
                  ],
                  "DataRows": [
                    [
                      "Chapter 1",
                      "1"
                    ],
                    [
                      "Chapter 2",
                      "5"
                    ],
                    [
                      "Chapter 3",
                      "10"
                    ],
                    [
                      "Chapter 4",
                      "15"
                    ],
                    [
                      "Chapter 5",
                      "20"
                    ],
                    [
                      "Chapter 6",
                      "25"
                    ],
                    [
                      "Chapter 7",
                      "30"
                    ],
                    [
                      "Chapter 8",
                      "35"
                    ],
                    [
                      "Chapter 9",
                      "40"
                    ],
                    [
                      "Chapter 10",
                      "45"
                    ],
                    [
                      "Chapter 11",
                      "50"
                    ],
                    [
                      "Chapter 12",
                      "55"
                    ],
                    [
                      "Chapter 13",
                      "60"
                    ],
                    [
                      "Chapter 14",
                      "65"
                    ],
                    [
                      "Chapter 15",
                      "70"
                    ],
                    [
                      "Chapter 16",
                      "75"
                    ],
                    [
                      "Chapter 17",
                      "80"
                    ],
                    [
                      "Chapter 18",
                      "85"
                    ],
                    [
                      "Chapter 19",
                      "90"
                    ],
                    [
                      "Chapter 20",
                      "95"
                    ],
                    [
                      "Chapter 21",
                      "100"
                    ],
                    [
                      "Chapter 22",
                      "105"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on the table heading",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the table body should collapse",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Features\\14MarkdownExample\\MarkdownExamples.feature",
      "Feature": {
        "Name": "Sample Markdown Feature",
        "Description": "Header 1\r\n========\r\n\r\nHeader 2\r\n--------\r\n\r\nThis is a *significant* word\r\n\r\n1. Ordered #1\r\n2. Ordered #2\r\n3. Ordered #3\r\n\r\n- Unordered #1\r\n- Unordered #2\r\n- Unordered #3\r\n\r\nHorizontal Rule:\r\n- - -\r\n\r\nTable example:\r\n\r\n| First Header  | Second Header |\r\n| ------------- | ------------- |\r\n| Content Cell  | Content Cell  |\r\n| Content Cell  | Content Cell  |\r\n\r\n- - -\r\n\r\nIncluding a picture: ![](./image.png)",
        "FeatureElements": [
          {
            "Name": "Sample Markdown Scenario Example",
            "Description": "This is **important** text\r\n\r\nCode Block:\r\n\r\n```\r\nvar x = 2;\r\n```\r\n\r\nApple\r\n:   Pomaceous fruit of plants of the genus Malus in\r\n    the family Rosaceae.\r\n:   An American computer company.\r\n\r\nOrange\r\n:   The fruit of an evergreen tree of the genus Citrus.",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "this",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "that",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Examples": [
              {
                "Name": "",
                "Description": "This __message__ is important too and is for an *Example* table.",
                "TableArgument": {
                  "HeaderRow": [
                    "test",
                    "test2"
                  ],
                  "DataRows": [
                    [
                      "value",
                      "value2"
                    ]
                  ]
                }
              }
            ],
            "Name": "Sample Markdown Scenario Outline Example",
            "Description": "This is [an example link to pickles](https://github.com/picklesdoc/pickles/wiki \"Pickles\") inline link.\r\n\r\n[This link to pickles](https://github.com/picklesdoc/pickles/wiki) has no title attribute.",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "this: <test>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "that: <test2>",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@AddingATag"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Background": {
          "Name": "",
          "Description": "This is the *coolest* background",
          "Steps": [
            {
              "Keyword": "Given",
              "NativeKeyword": "Given ",
              "Name": "I have initialized the Sum-variable to 0",
              "StepComments": [],
              "AfterLastStepComments": []
            },
            {
              "Keyword": "When",
              "NativeKeyword": "When ",
              "Name": "I add 1 to the Sum-variable",
              "StepComments": [],
              "AfterLastStepComments": []
            }
          ],
          "Tags": [],
          "Result": {
            "WasExecuted": false,
            "WasSuccessful": false
          }
        },
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Features\\13MultilineText\\MultilineFeatureExample.feature",
      "Feature": {
        "Name": "Multiline Feature Example",
        "Description": "\tIn order capture this particular Gherkin feature\r\n\tAs a Pickles contributer\r\n\tI want to demonstrate an example of using multiline text in a Scenario",
        "FeatureElements": [
          {
            "Name": "Mutliline Output",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have read in some text from the user",
                "DocStringArgument": "This is line 1.\r\nThis is line 2!\r\nThis is line 3!!",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I process this input",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result will be saved to the multiline text data store",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Features\\12NestedFolders\\ChildFolder\\ChildChildFolder\\NestedFolderExample.feature",
      "Feature": {
        "Name": "Nested Folder Example",
        "Description": "\tIn order to test nested folder output\r\n\tAs a silly contributer\r\n\tI want to create an example of something several folders deep",
        "FeatureElements": [
          {
            "Name": "Nested - Add two numbers",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have entered 50 into the calculator",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I have entered 70 into the calculator",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press add",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be 120 on the screen",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@nestedFolders"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Features\\11ContextInjection\\ContextInjection.feature",
      "Feature": {
        "Name": "Injecting context into step specifications",
        "Description": "\tIn order to don't have to rely on the global shared state\r\n\t\tand to be able to define the contexts required for each scenario.\r\n\tAs a SpecFlow Evanglist\r\n\tI would like to have the system automatically inject an instance of any class as \r\n\t\tdefined in the constructor of a step file",
        "FeatureElements": [
          {
            "Name": "Feature with no context",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "a feature which requires no context",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "everything is dandy",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Feature with a single context",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "a feature which requires a single context",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the context is set",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Feature with multiple contexts",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "a feature which requires multiple contexts",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the contexts are set",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Feature with recursive contexts",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "a feature which requires a recursive context",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the context is set",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "its sub-context is set",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Feature with a dependent context",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "a feature which requires a single context",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the context is set",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the context was created by the feature with a single context scenario",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Features\\10StepTransformation\\StepTransformation.feature",
      "Feature": {
        "Name": "Step Argument Transformations",
        "Description": "\tIn order to reduce the amount of code and repetitive tasks in my steps\r\n\tAs a SpecFlow evanglist\r\n\tI want to define reusable transformations for my step arguments",
        "FeatureElements": [
          {
            "Name": "Steps with non-string arguments",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "Dan has been registered at date 2003/03/13",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Aslak has been registered at terminal 2",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should be able to see Aslak at terminal 2",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Features\\09CallingStepsFromSteps\\CallingStepsFromSteps.feature",
      "Feature": {
        "Name": "Calling Steps from StepDefinitions",
        "Description": "\tIn order to create steps of a higher abstraction\r\n\tAs a SpecFlow evangelist\r\n\tI want reuse other steps in my step definitions",
        "FeatureElements": [
          {
            "Name": "Log in",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the index page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter my unsername nad password",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click the login button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the welcome page should be displayed",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Do something meaningful",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am logged in",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I dosomething meaningful",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should get rewarded",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Features\\08AttributeOverloading\\AttributeOverloading.feature",
      "Feature": {
        "Name": "Attribute overloading",
        "Description": "\tIn order to show that steps can be used with multiple attributes\r\n\tAs a SpecFlow Evangelist\r\n\tI want to show that similar attributes can be applied to the same step definition",
        "FeatureElements": [
          {
            "Name": "Checking number for evenness",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have this simple step",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "this simple step",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "also this step",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I do something",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I could validate that the number 2 is even",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "that the number 4 is even",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "But",
                "NativeKeyword": "But ",
                "Name": "the number 3 is odd",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Features\\07Svenska\\Svenska.feature",
      "Feature": {
        "Name": "Summering",
        "Description": "\tFör att slippa att göra dumma fel\r\n\tSom räknare\r\n\tVill jag kunna lägga summera",
        "FeatureElements": [
          {
            "Name": "Summera 5 och 7 ska vara 12",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Givet ",
                "Name": "att jag har knappat in 5",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "Och ",
                "Name": "att jag har knappat in 7",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "När ",
                "Name": "jag summerar",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Så ",
                "Name": "ska resultatet vara 12",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Features\\06CompareToAssist\\CompareTo.feature",
      "Feature": {
        "Name": "Show the compare to feature",
        "Description": "\tIn order to show the compare to features of SpecFlow Assist\r\n\tAs a SpecFlow evanglist\r\n\tI want to show how the different versions of compareTo works",
        "FeatureElements": [
          {
            "Name": "CompareToInstance",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have the following person",
                "TableArgument": {
                  "HeaderRow": [
                    "Field",
                    "Value"
                  ],
                  "DataRows": [
                    [
                      "Name",
                      "Marcus"
                    ],
                    [
                      "Style",
                      "Butch"
                    ],
                    [
                      "Birth date",
                      "1972-10-09"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "CompareToInstance should match this guy",
                "TableArgument": {
                  "HeaderRow": [
                    "Field",
                    "Value"
                  ],
                  "DataRows": [
                    [
                      "Name",
                      "Marcus"
                    ],
                    [
                      "Style",
                      "Butch"
                    ],
                    [
                      "BirthDate",
                      "10/9/1972 12:00:00 AM"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "CompareToInstance should match this guy",
                "TableArgument": {
                  "HeaderRow": [
                    "Field",
                    "Value"
                  ],
                  "DataRows": [
                    [
                      "Name",
                      "Marcus"
                    ],
                    [
                      "BirthDate",
                      "10/9/1972 12:00:00 AM"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "But",
                "NativeKeyword": "But ",
                "Name": "CompareToInstance should not match this guy",
                "TableArgument": {
                  "HeaderRow": [
                    "Field",
                    "Value"
                  ],
                  "DataRows": [
                    [
                      "Name",
                      "Anders"
                    ],
                    [
                      "Style",
                      "very cool"
                    ],
                    [
                      "BirthDate",
                      "10/9/1974 12:00:00 AM"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "# CompareToSet will test only the properties that you define in the table."
                  },
                  {
                    "Text": "# CompareToSet does not test the order of the objects, only that one was found that matches"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "CompareToSet",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have the following persons using assist",
                "TableArgument": {
                  "HeaderRow": [
                    "Name",
                    "Style",
                    "Birth date"
                  ],
                  "DataRows": [
                    [
                      "Marcus",
                      "Cool",
                      "1972-10-09"
                    ],
                    [
                      "Anders",
                      "Butch",
                      "1977-01-01"
                    ],
                    [
                      "Jocke",
                      "Soft",
                      "1974-04-04"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "CompareToSet should match this",
                "TableArgument": {
                  "HeaderRow": [
                    "Name",
                    "Style",
                    "BirthDate"
                  ],
                  "DataRows": [
                    [
                      "Marcus",
                      "Cool",
                      "10/9/1972 12:00:00 AM"
                    ],
                    [
                      "Anders",
                      "Butch",
                      "1/1/1977 12:00:00 AM"
                    ],
                    [
                      "Jocke",
                      "Soft",
                      "4/4/1974 12:00:00 AM"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "But",
                "NativeKeyword": "But ",
                "Name": "CompareToSet should not match this",
                "TableArgument": {
                  "HeaderRow": [
                    "Name",
                    "Style",
                    "BirthDate"
                  ],
                  "DataRows": [
                    [
                      "Marcus",
                      "Cool",
                      "10/9/1972 12:00:00 AM"
                    ],
                    [
                      "Anders",
                      "Butch",
                      "1/1/1977 12:00:00 AM"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Features\\05TablesAndAssist\\TableScenario.feature",
      "Feature": {
        "Name": "Showing table usage",
        "Description": "\tIn order to show how to use tables\r\n\tAs a SpecFlow evanglist\r\n\tI want to write some simple scenarios that uses tables tables",
        "FeatureElements": [
          {
            "Name": "Using tables",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have the following persons",
                "TableArgument": {
                  "HeaderRow": [
                    "Name",
                    "Style",
                    "Birth date",
                    "Cred"
                  ],
                  "DataRows": [
                    [
                      "Marcus",
                      "Cool",
                      "1972-10-09",
                      "50"
                    ],
                    [
                      "Anders",
                      "Butch",
                      "1977-01-01",
                      "500"
                    ],
                    [
                      "Jocke",
                      "Soft",
                      "1974-04-04",
                      "1000"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I search for Jocke",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the following person should be returned",
                "TableArgument": {
                  "HeaderRow": [
                    "Name",
                    "Style",
                    "Birth date",
                    "Cred"
                  ],
                  "DataRows": [
                    [
                      "Jocke",
                      "Soft",
                      "1974-04-04",
                      "1000"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Using tables with SpecFlow Assist",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have the following persons using assist",
                "TableArgument": {
                  "HeaderRow": [
                    "Name",
                    "Style",
                    "Birth date",
                    "Cred"
                  ],
                  "DataRows": [
                    [
                      "Marcus",
                      "Very cool",
                      "1972-10-09",
                      "50"
                    ],
                    [
                      "Anders",
                      "Butch",
                      "1977-01-01",
                      "500"
                    ],
                    [
                      "Jocke",
                      "Soft",
                      "1974-04-04",
                      "1000"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I search for Jocke",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the following person should be returned using assist",
                "TableArgument": {
                  "HeaderRow": [
                    "Name",
                    "Style",
                    "Birth date",
                    "Cred"
                  ],
                  "DataRows": [
                    [
                      "Jocke",
                      "Soft",
                      "1974-04-04",
                      "1000"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Creating a entity from field value",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I fill out the form like this",
                "TableArgument": {
                  "HeaderRow": [
                    "Field",
                    "Value"
                  ],
                  "DataRows": [
                    [
                      "Name",
                      "Marcus"
                    ],
                    [
                      "Style",
                      "very cool"
                    ],
                    [
                      "Birth date",
                      "1972-10-09"
                    ],
                    [
                      "Cred",
                      "100"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the following person should be returned using assist",
                "TableArgument": {
                  "HeaderRow": [
                    "Name",
                    "Style",
                    "Birth date",
                    "Cred"
                  ],
                  "DataRows": [
                    [
                      "Marcus",
                      "Very cool",
                      "1972-10-09",
                      "1000"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Example of a wide table",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "this wide table",
                "TableArgument": {
                  "HeaderRow": [
                    "Name",
                    "Style",
                    "Birth date",
                    "Cred",
                    "Name",
                    "Style",
                    "Birth date",
                    "Cred",
                    "Name",
                    "Style",
                    "Birth date",
                    "Cred",
                    "Name",
                    "Style",
                    "Birth date",
                    "Cred",
                    "Name",
                    "Style",
                    "Birth date",
                    "Cred",
                    "Name",
                    "Style",
                    "Birth date",
                    "Cred",
                    "Name",
                    "Style",
                    "Birth date",
                    "Cred",
                    "Name",
                    "Style",
                    "Birth date",
                    "Cred"
                  ],
                  "DataRows": [
                    [
                      "Marcus",
                      "Very cool",
                      "10/9/1972",
                      "1000",
                      "Marcus",
                      "Very cool",
                      "10/9/1972",
                      "1000",
                      "Marcus",
                      "Very cool",
                      "10/9/1972",
                      "1000",
                      "Marcus",
                      "Very cool",
                      "10/9/1972",
                      "1000",
                      "Marcus",
                      "Very cool",
                      "10/9/1972",
                      "1000",
                      "Marcus",
                      "Very cool",
                      "10/9/1972",
                      "1000",
                      "Marcus",
                      "Very cool",
                      "10/9/1972",
                      "1000",
                      "Marcus",
                      "Very cool",
                      "10/9/1972",
                      "1000"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Features\\04Background\\BackgroundFeature.feature",
      "Feature": {
        "Name": "Show the use of background",
        "Description": "\tIn order to show how to use the Background keyword of Gherkin\r\n\tAs a SpecFlow evanglist\r\n\tI want to show that background steps are called before any scenario step",
        "FeatureElements": [
          {
            "Name": "Add 1 to the sum",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I add 1 to the Sum-variable",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the total sum should be 2",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Add 2 to the sum",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I add 2 to the Sum-variable",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the total sum should be 3",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Background": {
          "Name": "",
          "Description": "",
          "Steps": [
            {
              "Keyword": "Given",
              "NativeKeyword": "Given ",
              "Name": "I have initialized the Sum-variable to 0",
              "StepComments": [],
              "AfterLastStepComments": []
            },
            {
              "Keyword": "When",
              "NativeKeyword": "When ",
              "Name": "I add 1 to the Sum-variable",
              "StepComments": [],
              "AfterLastStepComments": []
            }
          ],
          "Tags": [],
          "Result": {
            "WasExecuted": false,
            "WasSuccessful": false
          }
        },
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Features\\03ScenarioOutline\\ScenarioOutline.feature",
      "Feature": {
        "Name": "Scenario outline",
        "Description": "\tIn order to not have to type the same scenario over and over\r\n\tAs a SpecFlow evangelist\r\n\tI want to show how to use ScenarioOutline",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "less than 100",
                "TableArgument": {
                  "HeaderRow": [
                    "number 1",
                    "number 2",
                    "result"
                  ],
                  "DataRows": [
                    [
                      "10",
                      "20",
                      "30"
                    ],
                    [
                      "20",
                      "20",
                      "40"
                    ],
                    [
                      "20",
                      "30",
                      "50"
                    ]
                  ]
                }
              },
              {
                "Name": "more than 100",
                "TableArgument": {
                  "HeaderRow": [
                    "number 1",
                    "number 2",
                    "result"
                  ],
                  "DataRows": [
                    [
                      "100",
                      "20",
                      "120"
                    ],
                    [
                      "1000",
                      "20",
                      "1020"
                    ]
                  ]
                }
              }
            ],
            "Name": "Add two positive numbers with many examples",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I enter <number 1> into the calculator",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter <number 2> into the calculator",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I perform add",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be <result>",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "# This is called Abstrakt Scenario in Swedish (!!!)"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Examples": [
              {
                "Name": "less than 100",
                "TableArgument": {
                  "HeaderRow": [
                    "number 1",
                    "number 2",
                    "result"
                  ],
                  "DataRows": [
                    [
                      "10",
                      "20",
                      "30"
                    ],
                    [
                      "20",
                      "20",
                      "40"
                    ],
                    [
                      "20",
                      "30",
                      "50"
                    ]
                  ]
                }
              },
              {
                "Name": "more than 100",
                "TableArgument": {
                  "HeaderRow": [
                    "number 1",
                    "number 2",
                    "result"
                  ],
                  "DataRows": [
                    [
                      "100",
                      "20",
                      "120"
                    ],
                    [
                      "1000",
                      "20",
                      "1020"
                    ]
                  ]
                }
              }
            ],
            "Name": "Add two negative numbers with many examples",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I enter <number 1> into the calculator",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter <number 2> into the calculator",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I perform add",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be <result>",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Features\\032FeatureContext\\FeatureContextFeatures.feature",
      "Feature": {
        "Name": "FeatureContext features",
        "Description": "\tIn order to show how to use FeatureContext\r\n\tAs a SpecFlow evangelist\r\n\tI want to write some simple scenarios with data in FeatureContext",
        "FeatureElements": [
          {
            "Name": "Store and retrive Person Marcus from FeatureContext Current",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I store a person called Marcus in the current FeatureContext",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "a person called Marcus can easily be retrieved from the current FeatureContext",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Showing information of the feature",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I execute any scenario in the feature",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the FeatureInfo contains the following information",
                "TableArgument": {
                  "HeaderRow": [
                    "Field",
                    "Value"
                  ],
                  "DataRows": [
                    [
                      "Tags",
                      "showUpInScenarioInfo, andThisToo"
                    ],
                    [
                      "Title",
                      "FeatureContext features"
                    ],
                    [
                      "TargetLanguage",
                      "CSharp"
                    ],
                    [
                      "Language",
                      "en-US"
                    ],
                    [
                      "Description",
                      "In order to"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": [
          "@showUpInScenarioInfo",
          "@andThisToo"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Features\\031ScenarioContext\\ScenarioContext.feature",
      "Feature": {
        "Name": "Scenario Context features",
        "Description": "\tIn order to show how to use ScenarioContext\r\n\tAs a SpecFlow evangelist\r\n\tI want to write some simple scenarios with data in ScenarioContext",
        "FeatureElements": [
          {
            "Name": "Store and retrive Person Marcus from ScenarioContext",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I store a person called Marcus in the Current ScenarioContext",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "a person called Marcus can easily be retrieved",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Showing information of the scenario",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I execute any scenario",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the ScenarioInfo contains the following information",
                "TableArgument": {
                  "HeaderRow": [
                    "Field",
                    "Value"
                  ],
                  "DataRows": [
                    [
                      "Tags",
                      "showUpInScenarioInfo, andThisToo"
                    ],
                    [
                      "Title",
                      "Showing information of the scenario"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@showUpInScenarioInfo",
              "@andThisToo"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Show the type of step we're currently on",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have a Given step",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I have another Given step",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I have a When step",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I have a Then step",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#This is not so easy to write a scenario for but I've created an AfterScenario-hook"
                  },
                  {
                    "Text": "#To see this in action remove the @ignore tag below"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Display error information in AfterScenario",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "an error occurs in a step",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@ignore",
              "@showingErrorHandling"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Pending step",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I set the ScenarioContext.Current to pending",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "this step will not even be executed",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Features\\02TagsAndHooks\\TagDemo.feature",
      "Feature": {
        "Name": "Tag demonstrator",
        "Description": "\tIn order to show the capabilities of tags in SpecFlow\r\n\tAs a SpecFlow evanglist\r\n\tI want to write scenarios that has tags and show their usage in code",
        "FeatureElements": [
          {
            "Name": "Ignored scenario",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "that my scenario has the @ignore tag",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I run the scenario",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the scenario is ignored",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the missing step definitions are not reported",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@ignore"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "A scenario without tags",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "that my scenario has 0 tags",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I run the scenario",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "before scenario hook with '' is run",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "A scenario with 1 tag",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "that my scenario has 1 tags",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I run the scenario",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "before scenario hook with 'testTag1' is run",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@testTag1"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "A scenario with 3 tags",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "that my scenario has 3 tags",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I run the scenario",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "before scenario hook with 'testTag1, testTag2, testTag3' is run",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@testTag1",
              "@testTag2",
              "@testTag3"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "A scenario with 2 tags",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "that my scenario has 2 tags",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I run the scenario",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "before scenario hook with 'testTag1, testTag3' is run",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@testTag1",
              "@testTag3"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": [
          "@allAboutTags",
          "@important"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Features\\02TagsAndHooks\\Hooks.feature",
      "Feature": {
        "Name": "Addition",
        "Description": "\tIn order to explain the order in which hooks are run\r\n\tAs a SpecFlow evanglist\r\n\tI wan to  be able to hook into pre and post conditions in SpecFlow",
        "FeatureElements": [
          {
            "Name": "Hooking into pre conditions for Test Runs in SpecFlow",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the scenario is running",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the BeforeTestRun hook should have been executed",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Hooking into pre conditions for Features in SpecFlow",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the scenario is running",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the BeforeFeature hook should have been executed",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Hooking into pre conditions for Scenarios in SpecFlow",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the scenario is running",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the BeforeScenario hook should have been executed",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Hooking into pre conditions for ScenarioBlocks in SpecFlow",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the scenario is running",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the BeforeScenarioBlock hook should have been executed",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Hooking into pre conditions for Steps in SpecFlow",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the scenario is running",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the BeforeStep hook should have been executed",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Features\\01TestRunner\\TestRunnerIsNotImportant.feature",
      "Feature": {
        "Name": "The test runner is not (very) important",
        "Description": "\tIn order to show that the test runner is just for the autogenerated stuff in SpecFlow  \r\n\tAs a SpecFlow evanglist  \r\n\tI want to be able to call my steps in the same manner inspite of the testrunner configured  ",
        "FeatureElements": [
          {
            "Name": "A couple of simple steps",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have step defintions in place",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I call a step",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the step should have been called",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Features\\00BasicGherkin\\BasicGherkin.feature",
      "Feature": {
        "Name": "Showing basic gherkin syntax",
        "Description": "In order to see that gherkin is a very simple language\r\nAs a SpecFlow evangelist\r\nI want to show that basic syntax\r\n\r\n![Test Image](test.jpg)",
        "FeatureElements": [
          {
            "Name": "Simple GWT",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the initial state of the application is Running",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I ask what the application state is",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should see Running as the answer",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Using And and But",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the initial state of the application is Running",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I have authorization to ask application state",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I ask what the application state is",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should see Running as the answer",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I should see the time of the application",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "But",
                "NativeKeyword": "But ",
                "Name": "the state of the application should not be Stopped",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Features\\Trigonometry.feature",
      "Feature": {
        "Name": "Trigonometry",
        "Description": "\tIn order to avoid perform more advanced calculations\r\n\tAs a math idiot\r\n\tI want to be able to use trigonometric functions",
        "FeatureElements": [
          {
            "Name": "Sine",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have entered 90 into the calculator",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press sin",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be 1 on the screen",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@trigonometric",
              "@fast"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Cosine",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have entered 0 into the calculator",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press cos",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be 1 on the screen",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@trigonometric",
              "@fast"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Tangent",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have entered 45 into the calculator",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press tan",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be 1 on the screen",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@trigonometric",
              "@fast"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Features\\Arithmetic.feature",
      "Feature": {
        "Name": "Arithmetic",
        "Description": "In order to avoid silly mistakes\r\nAs a math idiot\r\nI want to be able to perform arithmetic on the calculator\r\n\r\nWhen $a \\ne 0$, there are two solutions to $\\(ax^2 + bx + c = 0\\)$ and they are\r\n$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$",
        "FeatureElements": [
          {
            "Name": "Add two numbers",
            "Description": "$50 + 70 = 120$",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have entered 50 into the calculator",
                "StepComments": [
                  {
                    "Text": "# In the DHTML version, the description will be rendered with mathematical formulas if the experimental features are enabled."
                  }
                ],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I have entered 70 into the calculator",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press add",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be 120 on the screen",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@arithmetic",
              "@fast"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Subtract two numbers",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have entered 50 into the calculator",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I have entered 70 into the calculator",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press subtract",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be -20 on the screen",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@arithmetic",
              "@fast"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Multiply two numbers",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have entered 50 into the calculator",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I have entered 70 into the calculator",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press multiply",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be 3500 on the screen",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@arithmetic",
              "@fast"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Divide two numbers",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have entered 50 into the calculator",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I have entered 2 into the calculator",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press divide",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be 25 on the screen",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@arithmetic",
              "@fast"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    }
  ],
  "Summary": {
    "Tags": [
      {
        "Tag": "@showUpInScenarioInfo",
        "Total": 3,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 3
      },
      {
        "Tag": "@andThisToo",
        "Total": 3,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 3
      },
      {
        "Tag": "@allAboutTags",
        "Total": 5,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 5
      },
      {
        "Tag": "@important",
        "Total": 5,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 5
      },
      {
        "Tag": "@workflow",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@slow",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@AddingATag",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@mytag",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@nestedFolders",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@ignore",
        "Total": 2,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 2
      },
      {
        "Tag": "@showingErrorHandling",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@testTag1",
        "Total": 3,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 3
      },
      {
        "Tag": "@testTag2",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@testTag3",
        "Total": 2,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 2
      },
      {
        "Tag": "@trigonometric",
        "Total": 3,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 3
      },
      {
        "Tag": "@fast",
        "Total": 7,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 7
      },
      {
        "Tag": "@arithmetic",
        "Total": 4,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 4
      }
    ],
    "Folders": [
      {
        "Folder": "Features",
        "Total": 53,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 53
      }
    ],
    "NotTestedFolders": [
      {
        "Folder": "Features",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "Scenarios": {
      "Total": 53,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 53
    },
    "Features": {
      "Total": 22,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 22
    }
  },
  "Configuration": {
    "SutName": "Pickles",
    "SutVersion": "2.6.3",
    "GeneratedOn": "24 Mai 2016 13:51:28"
  }
});