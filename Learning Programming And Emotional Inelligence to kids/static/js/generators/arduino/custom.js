
goog.provide('Blockly.Arduino.custom');

goog.require('Blockly.Arduino');


Blockly.Arduino.base_delay_example = function() {
  var delay_time = Blockly.Arduino.valueToCode(this, 'Motion', Blockly.Arduino.ORDER_ATOMIC) || '1000'
  var code = 'delay(' + delay_time + ');\n';
  return code;
};



// Blockly.Arduino.move_forward = function() {
	// var msg;
	// msg="hello";
	// alert(msg);
 // Generate JavaScript for moving forward or backwards.
    // var value = block.getFieldValue('VALUE');
    // var xxx = 'Turtle.' + block.getFieldValue('DIR') +
      // '(' + value + ', \'block_id_' + block.id + '\');\n';
    // return 'window.alert(' + msg +');\n';
 // };

// turtle_move_internal