
goog.provide('Blockly.Blocks.custom');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['base_delay_example'] = {
  helpUrl: 'http://arduino.cc/en/Reference/delay',
  init: function() {
    this.setColour(120);
    this.appendValueInput("Motion", 'Number')
        .appendField("Delay whee")
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Delay specific time');
  }
};


Blockly.Blocks['move_Up'] = {
    init: function() {
    this.appendDummyInput()
    .appendField("move Up");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
    this.setTooltip('');
   // this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['move_TeacherUp'] = {
    init: function() {
    this.appendDummyInput()
    .appendField("Move Up");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
    this.setTooltip('');
   // this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['move_Right'] = {
    init: function() {
    this.appendDummyInput()
    .appendField("move Right");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
    this.setTooltip('');
   // this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['move_TeacherRight'] = {
    init: function(){
    this.appendDummyInput()
    .appendField("Move Right");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
    this.setTooltip('');
   // this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['move_Left'] = {
    init: function() {
    this.appendDummyInput()
    .appendField("move Left");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
    this.setTooltip('');
  this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['move_TeacherLeft'] = {
    init: function() {
    this.appendDummyInput()
    .appendField("Move Left");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
    this.setTooltip('');
  this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['move_Down'] = {
    init: function() {
    this.appendDummyInput()
    .appendField("move Down");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
    this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['move_TeacherDown'] = {
    init: function() {
    this.appendDummyInput()
    .appendField("Move Down");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
    this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['move_Forward'] = {
    init: function() {
    this.appendDummyInput()
    .appendField("move Forward");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
    this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};