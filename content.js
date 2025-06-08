// Emoji data organized by categories
const emojiData = {
  'Smileys': ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '🥰', '😍', '🤩', '😘', '😗', '☺️', '😚', '😙', '🥲', '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔', '🤐', '🤨', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '🥵', '🥶', '🥴', '😵', '🤯', '🤠', '🥳', '😎', '🤓', '🧐'],
  'Animals': ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🙈', '🙉', '🙊', '🐒', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜', '🦟', '🦗', '🕷️', '🦂', '🐢', '🐍', '🦎', '🦖', '🦕', '🐙', '🦑', '🦐', '🦞', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🦧', '🐘', '🦛', '🦏', '🐪', '🐫', '🦒', '🦘', '🐃', '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🦙', '🐐', '🦌', '🐕', '🐩', '🦮', '🐕‍🦺', '🐈', '🐓', '🦃', '🦚', '🦜', '🦢', '🦩', '🕊️', '🐇', '🦝', '🦡', '🐁', '🐀', '🐿️', '🦔'],
  'Food': ['🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑', '🥦', '🥬', '🥒', '🌶️', '🫑', '🌽', '🥕', '🫒', '🧄', '🧅', '🥔', '🍠', '🥐', '🥯', '🍞', '🥖', '🥨', '🧀', '🥚', '🍳', '🧈', '🥞', '🧇', '🥓', '🥩', '🍗', '🍖', '🦴', '🌭', '🍔', '🍟', '🍕', '🫓', '🥪', '🥙', '🧆', '🌮', '🌯', '🫔', '🥗', '🥘', '🫕', '🥫', '🍝', '🍜', '🍲', '🍛', '🍣', '🍱', '🥟', '🦪', '🍤', '🍙', '🍚', '🍘', '🍥', '🥠', '🥮', '🍢', '🍡', '🍧', '🍨', '🍦', '🥧', '🧁', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🌰', '🥜', '🍯'],
  'Activities': ['⚽', '🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', '🥏', '🎱', '🪀', '🏓', '🏸', '🏒', '🏑', '🥍', '🏏', '🪃', '🥅', '⛳', '🪁', '🏹', '🎣', '🤿', '🥊', '🥋', '🎽', '🛹', '🛷', '⛸️', '🥌', '🎿', '⛷️', '🏂', '🪂', '🏋️‍♀️', '🏋️', '🏋️‍♂️', '🤼‍♀️', '🤼', '🤼‍♂️', '🤸‍♀️', '🤸', '🤸‍♂️', '⛹️‍♀️', '⛹️', '⛹️‍♂️', '🤺', '🤾‍♀️', '🤾', '🤾‍♂️', '🏌️‍♀️', '🏌️', '🏌️‍♂️', '🏇', '🧘‍♀️', '🧘', '🧘‍♂️', '🏄‍♀️', '🏄', '🏄‍♂️', '🏊‍♀️', '🏊', '🏊‍♂️', '🤽‍♀️', '🤽', '🤽‍♂️', '🚣‍♀️', '🚣', '🚣‍♂️', '🧗‍♀️', '🧗', '🧗‍♂️', '🚵‍♀️', '🚵', '🚵‍♂️', '🚴‍♀️', '🚴', '🚴‍♂️', '🏆', '🥇', '🥈', '🥉', '🏅', '🎖️', '🏵️', '🎗️', '🎫', '🎟️', '🎪', '🤹', '🤹‍♀️', '🤹‍♂️', '🎭', '🩰', '🎨', '🎬', '🎤', '🎧', '🎼', '🎵', '🎶', '🥁', '🪘', '🎷', '🎺', '🎸', '🪕', '🎻', '🎲', '♟️', '🎯', '🎳', '🎮', '🎰', '🧩'],
  'Travel': ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐', '🛻', '🚚', '🚛', '🚜', '🏍️', '🛵', '🚲', '🛴', '🛹', '🛼', '🚁', '🛸', '✈️', '🛩️', '🪂', '💺', '🚀', '🛰️', '🚉', '🚊', '🚝', '🚞', '🚋', '🚃', '🚂', '🚈', '🚄', '🚅', '🚆', '🚇', '🚈', '🚉', '🚊', '🚝', '🚞', '🚋', '🚃', '🚂', '🚆', '🚄', '🚅', '🚈', '🚇', '🚉', '🚊', '🚝', '🚞', '🚋', '🚃', '🚂', '🚆', '🚄', '🚅', '🚈', '🚇', '🛳️', '⛴️', '🛥️', '🚤', '⛵', '🛶', '🚣', '🛟', '⚓', '🪝', '⛽', '🚨', '🚥', '🚦', '🛑', '🚧', '⚠️', '🚸', '⛔', '🚫', '🚳', '🚭', '🚯', '🚱', '🚷', '📵', '🔞', '☢️', '☣️'],
  'Objects': ['⌚', '📱', '📲', '💻', '⌨️', '🖥️', '🖨️', '🖱️', '🖲️', '🕹️', '🗜️', '💽', '💾', '💿', '📀', '📼', '📷', '📸', '📹', '🎥', '📽️', '🎞️', '📞', '☎️', '📟', '📠', '📺', '📻', '🎙️', '🎚️', '🎛️', '🧭', '⏱️', '⏲️', '⏰', '🕰️', '⌛', '⏳', '📡', '🔋', '🔌', '💡', '🔦', '🕯️', '🪔', '🧯', '🛢️', '💸', '💵', '💴', '💶', '💷', '🪙', '💰', '💳', '💎', '⚖️', '🪜', '🧰', '🔧', '🔨', '⚒️', '🛠️', '⛏️', '🪓', '🪚', '🔩', '⚙️', '🪤', '🧱', '⛓️', '🧲', '🔫', '💣', '🧨', '🪓', '🔪', '🗡️', '⚔️', '🛡️', '🚬', '⚰️', '🪦', '⚱️', '🏺', '🔮', '📿', '🧿', '💈', '⚗️', '🔭', '🔬', '🕳️', '🩹', '🩺', '💊', '💉', '🩸', '🧬', '🦠', '🧫', '🧪', '🌡️', '🧹', '🪣', '🧽', '🧼', '🪥', '🪒', '🧴', '🛎️', '🔑', '🗝️', '🚪', '🪑', '🛋️', '🛏️', '🛌', '🧸', '🪆', '🖼️', '🪞', '🪟', '🛍️', '🛒', '🎁', '🎀', '🎊', '🎉', '🎈', '🎄', '🎃', '🎋', '🎍', '🎎', '🎏', '🎐', '🎑', '🧧', '🎀', '🎁', '🎗️', '🎟️', '🎫', '🎖️', '🏆', '🏅', '🥇', '🥈', '🥉'],
  'Symbols': ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️', '✝️', '☪️', '🕉️', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐', '⛎', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '🆔', '⚛️', '🉑', '☢️', '☣️', '📴', '📳', '🈶', '🈚', '🈸', '🈺', '🈷️', '✴️', '🆚', '💮', '🉐', '㊙️', '㊗️', '🈴', '🈵', '🈹', '🈲', '🅰️', '🅱️', '🆎', '🆑', '🅾️', '🆘', '❌', '⭕', '🛑', '⛔', '📛', '🚫', '💯', '💢', '♨️', '🚷', '🚯', '🚳', '🚱', '🔞', '📵', '🚭', '❗', '❕', '❓', '❔', '‼️', '⁉️', '🔅', '🔆', '〽️', '⚠️', '🚸', '🔱', '⚜️', '🔰', '♻️', '✅', '🈯', '💹', '❇️', '✳️', '❎', '🌐', '💠', 'Ⓜ️', '🌀', '💤', '🏧', '🚾', '♿', '🅿️', '🈳', '🈂️', '🛂', '🛃', '🛄', '🛅', '🚹', '🚺', '🚼', '⚧', '🚻', '🚮', '🎦', '📶', '🈁', '🔣', 'ℹ️', '🔤', '🔡', '🔠', '🆖', '🆗', '🆙', '🆒', '🆕', '🆓', '0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟']
};

let currentActiveInput = null;
let emojiPicker = null;

// Create emoji picker button
function createEmojiButton() {
  const button = document.createElement('button');
  button.innerHTML = '😀';
  button.className = 'emoji-picker-btn';
  button.type = 'button';
  button.title = 'Add emoji';
  return button;
}

// Create emoji picker popup
function createEmojiPicker() {
  const picker = document.createElement('div');
  picker.className = 'emoji-picker-popup';
  picker.style.display = 'none';
  
  // Create categories
  const categories = document.createElement('div');
  categories.className = 'emoji-categories';
  
  Object.keys(emojiData).forEach(category => {
    const categoryBtn = document.createElement('button');
    categoryBtn.textContent = category;
    categoryBtn.className = 'emoji-category-btn';
    categoryBtn.onclick = () => showCategory(category, picker);
    categories.appendChild(categoryBtn);
  });
  
  picker.appendChild(categories);
  
  // Create emoji grid
  const emojiGrid = document.createElement('div');
  emojiGrid.className = 'emoji-grid';
  picker.appendChild(emojiGrid);
  
  // Show first category by default
  showCategory(Object.keys(emojiData)[0], picker);
  
  document.body.appendChild(picker);
  return picker;
}

// Show emojis for selected category
function showCategory(category, pickerElement = null) {
  const picker = pickerElement || emojiPicker;
  if (!picker) return;
  
  const emojiGrid = picker.querySelector('.emoji-grid');
  emojiGrid.innerHTML = '';
  
  // Update active category button
  picker.querySelectorAll('.emoji-category-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent === category) {
      btn.classList.add('active');
    }
  });
  
  emojiData[category].forEach(emoji => {
    const emojiBtn = document.createElement('button');
    emojiBtn.textContent = emoji;
    emojiBtn.className = 'emoji-btn';
    emojiBtn.onclick = () => insertEmoji(emoji);
    emojiGrid.appendChild(emojiBtn);
  });
}

// Insert emoji into active input
function insertEmoji(emoji) {
  if (currentActiveInput) {
    const start = currentActiveInput.selectionStart;
    const end = currentActiveInput.selectionEnd;
    const value = currentActiveInput.value;
    
    // Store original value and selection
    const newValue = value.slice(0, start) + emoji + value.slice(end);
    const newCursorPos = start + emoji.length;
    
    // Method 1: Try document.execCommand (works with many frameworks)
    currentActiveInput.focus();
    currentActiveInput.setSelectionRange(start, end);
    
    if (document.execCommand && document.execCommand('insertText', false, emoji)) {
      // execCommand worked, cursor is already positioned correctly
    } else {
      // Method 2: Fallback to direct value setting with multiple event triggers
      currentActiveInput.value = newValue;
      currentActiveInput.setSelectionRange(newCursorPos, newCursorPos);
      
      // Trigger multiple events to ensure framework compatibility
      const events = [
        new Event('input', { bubbles: true, cancelable: true }),
        new Event('change', { bubbles: true, cancelable: true }),
        new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: emoji }),
        new KeyboardEvent('keypress', { bubbles: true, cancelable: true, key: emoji }),
        new KeyboardEvent('keyup', { bubbles: true, cancelable: true, key: emoji }),
        new InputEvent('beforeinput', { bubbles: true, cancelable: true, data: emoji, inputType: 'insertText' }),
        new InputEvent('input', { bubbles: true, cancelable: true, data: emoji, inputType: 'insertText' })
      ];
      
      events.forEach(event => {
        try {
          currentActiveInput.dispatchEvent(event);
        } catch (e) {
          // Some events might not be supported in all browsers
        }
      });
    }
    
    // Final fallback: set value again in case it was overridden
    setTimeout(() => {
      if (currentActiveInput && currentActiveInput.value !== newValue) {
        currentActiveInput.value = newValue;
        currentActiveInput.setSelectionRange(newCursorPos, newCursorPos);
        currentActiveInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }, 0);
  }
  hideEmojiPicker();
}

// Show emoji picker
function showEmojiPicker(button, input) {
  currentActiveInput = input;
  
  if (!emojiPicker) {
    emojiPicker = createEmojiPicker();
  }
  
  const rect = button.getBoundingClientRect();
  emojiPicker.style.display = 'block';
  emojiPicker.style.left = rect.left + 'px';
  emojiPicker.style.top = (rect.bottom + 5) + 'px';
  
  // Adjust position if picker goes off screen
  const pickerRect = emojiPicker.getBoundingClientRect();
  if (pickerRect.right > window.innerWidth) {
    emojiPicker.style.left = (window.innerWidth - pickerRect.width - 10) + 'px';
  }
  if (pickerRect.bottom > window.innerHeight) {
    emojiPicker.style.top = (rect.top - pickerRect.height - 5) + 'px';
  }
}

// Hide emoji picker
function hideEmojiPicker() {
  if (emojiPicker) {
    emojiPicker.style.display = 'none';
  }
  currentActiveInput = null;
}

// Add emoji button to input field
function addEmojiButtonToInput(input) {
  // Skip if already has emoji button
  if (input.hasAttribute('data-emoji-enabled')) return;
  
  input.setAttribute('data-emoji-enabled', 'true');
  
  // Create wrapper div
  const wrapper = document.createElement('div');
  wrapper.className = 'emoji-input-wrapper';
  
  // Insert wrapper before input
  input.parentNode.insertBefore(wrapper, input);
  wrapper.appendChild(input);
  
  // Create and add emoji button
  const emojiButton = createEmojiButton();
  wrapper.appendChild(emojiButton);
  
  // Add click event to emoji button
  emojiButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    showEmojiPicker(emojiButton, input);
  });
}

// Find and process text inputs
function processInputs() {
  const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="search"], input[type="url"], input:not([type]), textarea');
  
  inputs.forEach(input => {
    // Skip if input is hidden or readonly
    if (input.offsetParent === null || input.readOnly || input.disabled) return;
    
    addEmojiButtonToInput(input);
  });
}

// Close emoji picker when clicking outside
document.addEventListener('click', (e) => {
  if (emojiPicker && !emojiPicker.contains(e.target) && !e.target.classList.contains('emoji-picker-btn')) {
    hideEmojiPicker();
  }
});

// Close emoji picker on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && emojiPicker && emojiPicker.style.display === 'block') {
    hideEmojiPicker();
  }
});

// Initialize extension
function init() {
  processInputs();
  
  // Watch for dynamically added inputs
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.matches('input, textarea')) {
            if (node.type === 'text' || node.type === 'email' || node.type === 'search' || node.type === 'url' || !node.type || node.tagName === 'TEXTAREA') {
              addEmojiButtonToInput(node);
            }
          } else {
            // Check for inputs within the added node
            const inputs = node.querySelectorAll('input[type="text"], input[type="email"], input[type="search"], input[type="url"], input:not([type]), textarea');
            inputs.forEach(input => {
              if (input.offsetParent !== null && !input.readOnly && !input.disabled) {
                addEmojiButtonToInput(input);
              }
            });
          }
        }
      });
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

// Start the extension when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}