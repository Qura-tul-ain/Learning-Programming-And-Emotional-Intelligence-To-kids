// Copyright 2009 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

goog.module('goog.events.FileDropHandlerTest');
goog.setTestOnly();

const BrowserEvent = goog.require('goog.events.BrowserEvent');
const EventType = goog.require('goog.events.EventType');
const FileDropHandler = goog.require('goog.events.FileDropHandler');
const GoogEventTarget = goog.require('goog.events.EventTarget');
const events = goog.require('goog.events');
const testSuite = goog.require('goog.testing.testSuite');
const userAgent = goog.require('goog.userAgent');

let textarea;
let doc;
let handler;
let dnd;
let files;

testSuite({
  setUp() {
    textarea = new GoogEventTarget();
    doc = new GoogEventTarget();
    textarea.ownerDocument = doc;
    handler = new FileDropHandler(textarea);
    dnd = false;
    files = null;
    events.listen(handler, FileDropHandler.EventType.DROP, (e) => {
      dnd = true;
      files = e.getBrowserEvent().dataTransfer.files;
    });
  },

  tearDown() {
    textarea.dispose();
    doc.dispose();
    handler.dispose();
  },

  testOneFile() {
    let preventDefault = false;
    const expectedfiles = [{fileName: 'file1.jpg'}];
    const dt = {types: ['Files'], files: expectedfiles};

    // Assert that default actions are prevented on dragenter.
    textarea.dispatchEvent(new BrowserEvent({
      preventDefault: function() {
        preventDefault = true;
      },
      type: EventType.DRAGENTER,
      dataTransfer: dt,
    }));
    assertTrue(preventDefault);
    preventDefault = false;

    // Assert that default actions are prevented on dragover.
    textarea.dispatchEvent(new BrowserEvent({
      preventDefault: function() {
        preventDefault = true;
      },
      type: EventType.DRAGOVER,
      dataTransfer: dt,
    }));
    assertTrue(preventDefault);
    preventDefault = false;
    // Assert that the drop effect is set to 'copy'.
    assertEquals('copy', dt.dropEffect);

    // Assert that default actions are prevented on drop.
    textarea.dispatchEvent(new BrowserEvent({
      preventDefault: function() {
        preventDefault = true;
      },
      type: EventType.DROP,
      dataTransfer: dt,
    }));
    assertTrue(preventDefault);

    // Assert that DROP has been fired.
    assertTrue(dnd);
    assertEquals(1, files.length);
    assertEquals(expectedfiles[0].fileName, files[0].fileName);
  },

  testMultipleFiles() {
    let preventDefault = false;
    const expectedfiles = [{fileName: 'file1.jpg'}, {fileName: 'file2.jpg'}];
    const dt = {types: ['Files', 'text'], files: expectedfiles};

    // Assert that default actions are prevented on dragenter.
    textarea.dispatchEvent(new BrowserEvent({
      preventDefault: function() {
        preventDefault = true;
      },
      type: EventType.DRAGENTER,
      dataTransfer: dt,
    }));
    assertTrue(preventDefault);
    preventDefault = false;

    // Assert that default actions are prevented on dragover.
    textarea.dispatchEvent(new BrowserEvent({
      preventDefault: function() {
        preventDefault = true;
      },
      type: EventType.DRAGOVER,
      dataTransfer: dt,
    }));
    assertTrue(preventDefault);
    preventDefault = false;
    // Assert that the drop effect is set to 'copy'.
    assertEquals('copy', dt.dropEffect);

    // Assert that default actions are prevented on drop.
    textarea.dispatchEvent(new BrowserEvent({
      preventDefault: function() {
        preventDefault = true;
      },
      type: EventType.DROP,
      dataTransfer: dt,
    }));
    assertTrue(preventDefault);

    // Assert that DROP has been fired.
    assertTrue(dnd);
    assertEquals(2, files.length);
    assertEquals(expectedfiles[0].fileName, files[0].fileName);
    assertEquals(expectedfiles[1].fileName, files[1].fileName);
  },

  testNoFiles() {
    let preventDefault = false;
    const dt = {types: ['text']};

    // Assert that default actions are not prevented on dragenter.
    textarea.dispatchEvent(new BrowserEvent({
      preventDefault: function() {
        preventDefault = true;
      },
      type: EventType.DRAGENTER,
      dataTransfer: dt,
    }));
    assertFalse(preventDefault);
    preventDefault = false;

    // Assert that default actions are not prevented on dragover.
    textarea.dispatchEvent(new BrowserEvent({
      preventDefault: function() {
        preventDefault = true;
      },
      type: EventType.DRAGOVER,
      dataTransfer: dt,
    }));
    assertFalse(preventDefault);
    preventDefault = false;

    // Assert that default actions are not prevented on drop.
    textarea.dispatchEvent(new BrowserEvent({
      preventDefault: function() {
        preventDefault = true;
      },
      type: EventType.DROP,
      dataTransfer: dt,
    }));
    assertFalse(preventDefault);

    // Assert that DROP has not been fired.
    assertFalse(dnd);
    assertNull(files);
  },

  testDragEnter() {
    let preventDefault = false;

    // Assert that default actions are prevented on dragenter.
    // In Chrome the dragenter event has an empty file list and the types is
    // set to 'Files'.
    textarea.dispatchEvent(new BrowserEvent({
      preventDefault: function() {
        preventDefault = true;
      },
      type: EventType.DRAGENTER,
      dataTransfer: {types: ['Files'], files: []},
    }));
    assertTrue(preventDefault);
    preventDefault = false;

    // Assert that default actions are prevented on dragenter.
    // In Safari 4 the dragenter event has an empty file list and the types is
    // set to 'public.file-url'.
    textarea.dispatchEvent(new BrowserEvent({
      preventDefault: function() {
        preventDefault = true;
      },
      type: EventType.DRAGENTER,
      dataTransfer: {types: ['public.file-url'], files: []},
    }));
    assertTrue(preventDefault);
    preventDefault = false;

    // Assert that default actions are not prevented on dragenter
    // when the drag contains no files.
    textarea.dispatchEvent(new BrowserEvent({
      preventDefault: function() {
        preventDefault = true;
      },
      type: EventType.DRAGENTER,
      dataTransfer: {types: ['text'], files: []},
    }));
    assertFalse(preventDefault);
  },

  testPreventDropOutside() {
    let preventDefault = false;
    const dt = {types: ['Files'], files: [{fileName: 'file1.jpg'}]};

    // Assert that default actions are not prevented on dragenter on the
    // document outside the text area.
    doc.dispatchEvent(new BrowserEvent({
      preventDefault: function() {
        preventDefault = true;
      },
      type: EventType.DRAGENTER,
      dataTransfer: dt,
    }));
    assertFalse(preventDefault);
    preventDefault = false;

    // Assert that default actions are not prevented on dragover on the
    // document outside the text area.
    doc.dispatchEvent(new BrowserEvent({
      preventDefault: function() {
        preventDefault = true;
      },
      type: EventType.DRAGOVER,
      dataTransfer: dt,
    }));
    assertFalse(preventDefault);
    preventDefault = false;

    handler.dispose();
    // Create a new FileDropHandler that prevents drops outside the text area.
    handler = new FileDropHandler(textarea, true);

    // Assert that default actions are now prevented on dragenter on the
    // document outside the text area.
    doc.dispatchEvent(new BrowserEvent({
      preventDefault: function() {
        preventDefault = true;
      },
      type: EventType.DRAGENTER,
      dataTransfer: dt,
    }));
    assertTrue(preventDefault);
    preventDefault = false;

    // Assert that default actions are now prevented on dragover on the
    // document outside the text area.
    doc.dispatchEvent(new BrowserEvent({
      preventDefault: function() {
        preventDefault = true;
      },
      type: EventType.DRAGOVER,
      dataTransfer: dt,
    }));
    assertTrue(preventDefault);
    preventDefault = false;
    // Assert also that the drop effect is set to 'none'.
    assertEquals('none', dt.dropEffect);
  },

  testEffectAllowedExceptionIsCaught() {
    // This bug was only affecting IE10+.
    if (!userAgent.IE || !userAgent.isVersionOrHigher(10)) {
      return;
    }

    let preventDefault = false;
    const expectedfiles = [{fileName: 'file1.jpg'}];
    const dt = {types: ['Files'], files: expectedfiles};

    // We construct a mock DataTransfer object that define a setter will throw
    // SCRIPT65535 when attempt to set property effectAllowed to simulate IE Bug
    // #811625. See more: https://github.com/google/closure-library/issues/485.
    Object.defineProperty(dt, 'effectAllowed', {
      set: function(v) {
        throw new Error('SCRIPT65535');
      }
    });

    // Assert that default actions are prevented on dragenter.
    textarea.dispatchEvent(new BrowserEvent({
      preventDefault: function() {
        preventDefault = true;
      },
      type: EventType.DRAGENTER,
      dataTransfer: dt,
    }));
    assertTrue(preventDefault);
    preventDefault = false;

    // Assert that default actions are prevented on dragover.
    textarea.dispatchEvent(new BrowserEvent({
      preventDefault: function() {
        preventDefault = true;
      },
      type: EventType.DRAGOVER,
      dataTransfer: dt,
    }));
    assertTrue(preventDefault);
  },
});
