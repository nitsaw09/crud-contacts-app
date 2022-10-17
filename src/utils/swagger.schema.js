module.exports = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "CRUD Contacts API Doc",
        version: "0.1.0",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
      },
      servers: [
        {
          url: "http://localhost:3000/api/v1",
        },
      ],
      paths: {
        "/contacts": {
            get: {
              tags:[
                "Contacts"
              ], 
              description: "Returns all contacts",
              responses: {
                "200": {          
                  description: "A list of contacts.",
                  content: {
                    "application/json": {
                      schema: {
                        type: "object",
                        properties: {
                            data: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                            firstName: { type: "string", description: "The first name", default: "John" },
                                            lastName: { type: "string", description: "The last name", default: "Doe" },
                                            email: { type: "string", description: "The email address", default: "john.doe@example.com" },
                                            notes: { type: "string", description: "Notes of contact", default: "Hiiiii!" }
                                        }
                                    },
                                }
                            }
                        }
                    }
                  }
                }
              }
            },
            post: {
                tags:[
                    "Contacts"
                ], 
                description: "Create new contact",
                requestBody: {
                    content: {
                      "application/x-www-form-urlencoded": {
                        schema: {
                          type: "object",
                          properties: {
                            email: { 
                              description: "email of the contact",
                              type: "string"
                            },
                            firstName: {
                              description: "first name of the contact",
                              type: "string"
                            },
                            lastName: {
                                description: "Last name of the contact",
                                type: "string"
                            },
                            notes: {
                                description: "Notes of the contact",
                                type: "string"
                            }
                          },
                          required: ["email", "firstName", "lastName", "notes"] 
                        }
                      }
                    }
                },
                responses: {
                    "200": {          
                      description: "A list of contacts.",
                      content: {
                        "application/json": {
                          schema: {
                            type: "object",
                            properties: {
                                success: { type: "boolean", default: true },
                                data: {
                                    type: "object",
                                    properties: {
                                        firstName: { type: "string", description: "The first name", default: "John" },
                                        lastName: { type: "string", description: "The last name", default: "Doe" },
                                        email: { type: "string", description: "The email address", default: "john.doe@example.com" },
                                        notes: { type: "string", description: "Notes of contact", default: "Hiiiii!" }
                                    }
                                },
                                message: { type: "string", description: 'success message', default: "Contact created successfully" }   
                            }
                          }
                        }
                      }
                    },
                    "500": {          
                        description: "Internal Server Error",
                        content: {
                          "application/json": {
                            schema: {
                              type: "object",
                              properties: {
                                  error: { type: "boolean", default: true },
                                  message: { type: "string", description: 'Error message', default: "Something went wrong!" }   
                              }
                            }
                          }
                        }
                    }
                }
            },
        },
        "/contacts/{cid}": {
            parameters: [
                {
                  name: "cid",
                  in: "path",
                  description: "ID of contact",
                  required: true,
                  schema: { "type": "string" },
                  style: "simple"
                }
            ],
            get: {
                tags:[
                    "Contacts"
                ], 
                description: "Returns contact",
                responses: {
                  "200": {          
                    description: "Get contact Details.",
                    content: {
                      "application/json": {
                        schema: {
                          type: "object",
                          properties: {
                              data: {
                                type: "object",
                                properties: {
                                    firstName: { type: "string", description: "The first name", default: "John" },
                                    lastName: { type: "string", description: "The last name", default: "Doe" },
                                    email: { type: "string", description: "The email address", default: "john.doe@example.com" },
                                    notes: { type: "string", description: "Notes of contact", default: "Hiiiii!" }
                                }  
                              }
                            }
                          }
                      }
                    }
                  }
                }
            },       
            put: {
                tags:[
                    "Contacts"
                ], 
                description: "Update contact",
                requestBody: {
                    content: {
                      "application/x-www-form-urlencoded": {
                        schema: {
                          type: "object",
                          properties: {
                            email: { 
                              description: "email of the contact",
                              type: "string"
                            },
                            firstName: {
                              description: "first name of the contact",
                              type: "string"
                            },
                            lastName: {
                                description: "Last name of the contact",
                                type: "string"
                            },
                            notes: {
                                description: "Notes of the contact",
                                type: "string"
                            }
                          },
                          required: ["email", "firstName", "lastName", "notes"] 
                        }
                      }
                    }
                },
                responses: {
                    "200": {          
                      description: "Updated contact.",
                      content: {
                        "application/json": {
                          schema: {
                            type: "object",
                            properties: {
                                success: { type: "boolean", default: true },
                                data: {
                                    type: "object",
                                    properties: {
                                        firstName: { type: "string", description: "The first name", default: "John" },
                                        lastName: { type: "string", description: "The last name", default: "Doe" },
                                        email: { type: "string", description: "The email address", default: "john.doe@example.com" },
                                        notes: { type: "string", description: "Notes of contact", default: "Hiiiii!" }
                                    }
                                },
                                message: { type: "string", description: 'success message', default: "Contact updated successfully" }   
                            }
                          }
                        }
                      }
                    },
                    "404": {          
                        description: "Contact Not Found",
                        content: {
                          "application/json": {
                            schema: {
                              type: "object",
                              properties: {
                                  error: { type: "boolean", default: true },
                                  message: { type: "string", description: 'Error message', default: "Contact not found" }   
                              }
                            }
                          }
                        }
                    },
                    "500": {          
                        description: "Internal Server Error",
                        content: {
                          "application/json": {
                            schema: {
                              type: "object",
                              properties: {
                                  error: { type: "boolean", default: true },
                                  message: { type: "string", description: 'Error message', default: "Something went wrong!" }   
                              }
                            }
                          }
                        }
                    }
                }
            },
            delete: {
                tags:[
                    "Contacts"
                ], 
                description: "Delete Contact",
                responses: {
                    "200": {          
                      description: "Deleted contact.",
                      content: {
                        "application/json": {
                          schema: {
                            type: "object",
                            properties: {
                                success: { type: "boolean", default: true },
                                message: { type: "string", description: 'success message', default: "Contact deleted successfully" }   
                            }
                          }
                        }
                      }
                    },
                    "404": {          
                        description: "Contact Not Found",
                        content: {
                          "application/json": {
                            schema: {
                              type: "object",
                              properties: {
                                  error: { type: "boolean", default: true },
                                  message: { type: "string", description: 'Error message', default: "Contact not found" }   
                              }
                            }
                          }
                        }
                    },
                    "500": {          
                        description: "Internal Server Error",
                        content: {
                          "application/json": {
                            schema: {
                              type: "object",
                              properties: {
                                  error: { type: "boolean", default: true },
                                  message: { type: "string", description: 'Error message', default: "Something went wrong!" }   
                              }
                            }
                          }
                        }
                    }
                }
            }
        }
      }      
    },
    apis: [
        "./src/routes/contacts.route.js",
    ],
}