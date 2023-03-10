/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// main.ts
__export(exports, {
  default: () => SequenceHotkeysPlugin
});
var import_obsidian2 = __toModule(require("obsidian"));

// keys.ts
var import_obsidian = __toModule(require("obsidian"));
var CODE_STR_MAP = new Map([
  ["Control", "Ctrl-"],
  ["ControlLeft", "Ctrl-"],
  ["ControlRight", "Ctrl-"],
  ["Alt", "Alt-"],
  ["AltLeft", "Alt-"],
  ["AltRight", "Alt-"],
  ["Shift", "Shift-"],
  ["ShiftLeft", "Shift-"],
  ["ShiftRight", "Shift-"],
  ["Meta", "Meta-"],
  ["MetaLeft", "Meta-"],
  ["MetaRight", "Meta-"],
  ["Escape", "Esc"],
  ["Enter", "Enter"],
  ["CapsLock", "CapsLock"],
  ["KeyA", "A"],
  ["KeyB", "B"],
  ["KeyC", "C"],
  ["KeyD", "D"],
  ["KeyE", "E"],
  ["KeyF", "F"],
  ["KeyG", "G"],
  ["KeyH", "H"],
  ["KeyI", "I"],
  ["KeyJ", "J"],
  ["KeyK", "K"],
  ["KeyL", "L"],
  ["KeyM", "M"],
  ["KeyN", "N"],
  ["KeyO", "O"],
  ["KeyP", "P"],
  ["KeyQ", "Q"],
  ["KeyR", "R"],
  ["KeyS", "S"],
  ["KeyT", "T"],
  ["KeyU", "U"],
  ["KeyV", "V"],
  ["KeyW", "W"],
  ["KeyX", "X"],
  ["KeyY", "Y"],
  ["KeyZ", "Z"],
  ["Digit0", "0"],
  ["Digit1", "1"],
  ["Digit2", "2"],
  ["Digit3", "3"],
  ["Digit4", "4"],
  ["Digit5", "5"],
  ["Digit6", "6"],
  ["Digit7", "7"],
  ["Digit8", "8"],
  ["Digit9", "9"],
  ["Minus", "-"],
  ["Equal", "="],
  ["BracketLeft", "["],
  ["BracketRight", "]"],
  ["Semicolon", ";"],
  ["Quote", "'"],
  ["Comma", ","],
  ["Period", "."],
  ["Slash", "/"],
  ["ArrowLeft", "Left"],
  ["ArrowRight", "Right"],
  ["ArrowUp", "Up"],
  ["ArrowDown", "Down"],
  ["Backquote", "`"]
]);
if (import_obsidian.Platform.isMacOS) {
  CODE_STR_MAP.set("Control", "\u2303");
  CODE_STR_MAP.set("ControlLeft", "\u2303");
  CODE_STR_MAP.set("ControlRight", "\u2303");
  CODE_STR_MAP.set("Alt", "\u2325");
  CODE_STR_MAP.set("AltLeft", "\u2325");
  CODE_STR_MAP.set("AltRight", "\u2325");
  CODE_STR_MAP.set("Shift", "\u21E7");
  CODE_STR_MAP.set("ShiftLeft", "\u21E7");
  CODE_STR_MAP.set("ShiftRight", "\u21E7");
  CODE_STR_MAP.set("Meta", "\u2318");
  CODE_STR_MAP.set("MetaLeft", "\u2318");
  CODE_STR_MAP.set("MetaRight", "\u2318");
  CODE_STR_MAP.set("Escape", "\u238B");
  CODE_STR_MAP.set("Enter", "\u23CE");
  CODE_STR_MAP.set("CapsLock", "\u21EA");
}
var codeToString = (e) => CODE_STR_MAP.get(e) || e;
var isModifier = (key) => {
  switch (key) {
    case "Control":
    case "Alt":
    case "Shift":
    case "Meta":
    case "ControlLeft":
    case "AltLeft":
    case "ShiftLeft":
    case "MetaLeft":
    case "ControlRight":
    case "AltRight":
    case "ShiftRight":
    case "MetaRight":
      return true;
    default:
      return false;
  }
};
var keySequenceEqual = (a, b) => a.length === b.length && a.every((c, i) => c.equals(b[i]));
var keySequencePartiallyEqual = (a, b) => {
  if (a.length === 0 || b.length === 0) {
    return false;
  }
  if (a.length > b.length) {
    return b.every((c, i) => c.equals(a[i]));
  }
  return a.every((c, i) => c.equals(b[i]));
};
var KeyChord = class {
  constructor(input) {
    this.meta = false;
    this.ctrl = false;
    this.alt = false;
    this.shift = false;
    this.key = "";
    this.equals = (other) => {
      return !!other && this.key === other.key && this.meta === other.meta && this.ctrl === other.ctrl && this.alt === other.alt && this.shift === other.shift;
    };
    this.serialize = () => {
      const parts = new Array();
      if (this.meta) {
        parts.push("M");
      }
      if (this.ctrl) {
        parts.push("C");
      }
      if (this.alt) {
        parts.push("A");
      }
      if (this.shift) {
        parts.push("S");
      }
      parts.push(this.key);
      return parts.join("-");
    };
    this.toString = () => {
      const keys = new Array();
      if (this.meta) {
        keys.push("Meta");
      }
      if (this.ctrl) {
        keys.push("Control");
      }
      if (this.alt) {
        keys.push("Alt");
      }
      if (this.shift) {
        keys.push("Shift");
      }
      keys.push(codeToString(this.key));
      return keys.map(codeToString).join("");
    };
    if (typeof input === "string") {
      const parts = input.split("-");
      this.key = parts.pop();
      parts.map((p) => {
        switch (p) {
          case "M":
            this.meta = true;
            break;
          case "C":
            this.ctrl = true;
            break;
          case "A":
            this.alt = true;
            break;
          case "S":
            this.shift = true;
            break;
        }
      });
    } else {
      if (!isModifier(input.code)) {
        this.key = input.code;
      }
      this.meta = input.metaKey;
      this.ctrl = input.ctrlKey;
      this.alt = input.altKey;
      this.shift = input.shiftKey;
    }
  }
};

// hotkey-manager.ts
function arrayStartsWith(arr, start) {
  if (start.length > arr.length) {
    return false;
  }
  return start.every((_, i) => arr[i] === start[i]);
}
var HotkeyManager = class {
  constructor(triggerHandler) {
    this._matchingHotheys = () => {
      const css = this.currentSequence.map((c) => c.toString());
      return this.registeredHotkeys.filter((r) => {
        const rcs = r.chords.map((c) => c.toString());
        return arrayStartsWith(rcs, css);
      });
    };
    this.handleChordPress = (chord) => {
      this.currentSequence.push(chord);
      let hotkeys = this._matchingHotheys();
      if (hotkeys.length === 0 && this.currentSequence.length > 1) {
        this.currentSequence = [chord];
        hotkeys = this._matchingHotheys();
      }
      if (hotkeys.length === 0) {
        this.currentSequence = [];
        return false;
      }
      let exactMatch = hotkeys.find((r) => {
        return this.currentSequence.length === r.chords.length;
      });
      if (exactMatch) {
        this.currentSequence = [];
        this.triggerHandler(hotkeys[0].id);
      }
      return true;
    };
    this.reset = () => {
      this.registeredHotkeys = [];
    };
    this.addHotkey = (id, chords) => {
      this.registeredHotkeys.push({ id, chords });
    };
    this.removeHotkey = (id) => {
      this.registeredHotkeys = this.registeredHotkeys.filter((r) => r.id !== id);
    };
    this.triggerHandler = triggerHandler;
    this.registeredHotkeys = [];
    this.currentSequence = [];
  }
};

// src/chord_listener.ts
var ChordListener = class {
  constructor(onChord) {
    this.chordPress = (event) => {
      if (!!this._lastKeydown) {
        if (this.onChord(new KeyChord(this._lastKeydown))) {
          event.preventDefault();
          event.stopPropagation();
        }
        this._lastKeydown = void 0;
      }
    };
    this.destruct = () => {
      document.removeEventListener("keydown", this.handleKeydown);
      document.removeEventListener("keyup", this.handleKeyup);
    };
    this.onChord = onChord;
    this.handleKeydown = (event) => {
      this._lastKeydown = event;
      if (isModifier(event.code)) {
        return;
      }
      this.chordPress(event);
    };
    this.handleKeyup = (event) => {
      this.chordPress(event);
    };
    document.addEventListener("keydown", this.handleKeydown);
    document.addEventListener("keyup", this.handleKeyup);
  }
};

// main.ts
var hotkeysEqual = (a, b) => a.command === b.command && keySequenceEqual(a.chords, b.chords);
var DEFAULT_SETTINGS = {
  hotkeys: Array()
};
var SerializeSettings = (settings) => {
  return {
    hotkeys: settings.hotkeys.map((h) => ({
      command: h.command,
      chords: h.chords.map((c) => c.serialize())
    }))
  };
};
var DeserializeSettings = (data) => {
  let settings = DEFAULT_SETTINGS;
  if (data == null ? void 0 : data.hotkeys) {
    settings.hotkeys = data.hotkeys.map((h) => ({
      command: h.command,
      chords: h.chords.map((c) => new KeyChord(c))
    }));
  }
  return settings;
};
function allCommands(app) {
  const commands = Object.values(app.commands.commands);
  commands.sort((a, b) => a.name.localeCompare(b.name));
  return commands;
}
var commandName = (app, id) => {
  var _a;
  return (_a = allCommands(app).find((c) => c.id === id)) == null ? void 0 : _a.name;
};
var hotkeysForCommand = (s, id) => s.hotkeys.filter((h) => h.command === id);
var SequenceHotkeysPlugin = class extends import_obsidian2.Plugin {
  constructor() {
    super(...arguments);
    this._settingsUpdated = () => {
      var _a;
      this.saveSettings();
      this.hotkeyManager.reset();
      this.settings.hotkeys.map((h) => this.hotkeyManager.addHotkey(h.command, h.chords));
      (_a = this.saveListener) == null ? void 0 : _a.call(this, this.settings);
    };
    this.setSaveListener = (fn) => {
      this.saveListener = fn;
    };
    this.addHotkey = (commandId, chords) => {
      if (chords == null ? void 0 : chords.length) {
        this.settings.hotkeys = [
          ...this.settings.hotkeys,
          {
            command: commandId,
            chords
          }
        ];
      }
      this._settingsUpdated();
    };
    this.deleteHotkey = (commandId, chords) => {
      this.settings.hotkeys = this.settings.hotkeys.filter((h) => h.command != commandId || !keySequenceEqual(h.chords, chords));
      this._settingsUpdated();
    };
  }
  onload() {
    return __async(this, null, function* () {
      this.hotkeyManager = new HotkeyManager((id) => this.app.commands.executeCommandById(id));
      yield this.loadSettings();
      this.addSettingTab(new SequenceHotkeysSettingTab(this.app, this));
      this.chordListener = new ChordListener((chord) => {
        if (!!this.app.setting.activeTab) {
          return false;
        }
        return this.hotkeyManager.handleChordPress(chord);
      });
    });
  }
  onunload() {
    this.chordListener.destruct();
  }
  loadSettings() {
    return __async(this, null, function* () {
      this.settings = Object.assign({}, DeserializeSettings(yield this.loadData()));
      this._settingsUpdated();
    });
  }
  saveSettings() {
    return __async(this, null, function* () {
      yield this.saveData(SerializeSettings(this.settings));
    });
  }
};
var SequenceHotkeysSettingTab = class extends import_obsidian2.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.setFilter = (s) => {
      this.filter = s;
      const filterParts = this.filter.toLowerCase().split(" ");
      this.commandSettingEls.map((cs) => cs.settingEl.toggle(filterParts.every((part) => cs.getCommand().name.toLowerCase().contains(part))));
    };
    this.plugin = plugin;
    this.filter = "";
    this.commandSettingEls = new Array();
  }
  hide() {
    this.commandSettingEls.map((s) => s.hide());
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    let searchEl;
    new import_obsidian2.Setting(containerEl).addSearch((s) => {
      searchEl = s;
      s.setPlaceholder("Filter...");
    });
    searchEl.onChange(this.setFilter);
    const commandsContainer = containerEl.createDiv();
    this.commandSettingEls = allCommands(this.app).map((command) => new CommandSetting(commandsContainer, command, this.plugin.addHotkey, this.plugin.deleteHotkey));
    const updateCommands = (s) => {
      this.commandSettingEls.map((cs) => {
        const hotkeys = hotkeysForCommand(s, cs.getCommand().id).map((h) => {
          const conflict = s.hotkeys.find((shc) => !hotkeysEqual(shc, h) && keySequencePartiallyEqual(shc.chords, h.chords));
          return {
            chords: h.chords,
            warning: !!conflict ? `This hotkey conflicts with "${commandName(this.app, conflict.command)}"` : ""
          };
        });
        cs.display(hotkeys);
      });
    };
    this.plugin.setSaveListener(updateCommands);
    updateCommands(this.plugin.settings);
    searchEl.inputEl.focus();
  }
};
var CommandSetting = class extends import_obsidian2.Setting {
  constructor(containerEl, command, onCreated, onDelete) {
    super(containerEl);
    this.getCommand = () => this.command;
    this.hide = () => {
      this.setCancelCapture(void 0);
    };
    this.setCancelCapture = (cb) => {
      var _a;
      (_a = this.cancelCapture) == null ? void 0 : _a.call(this);
      this.cancelCapture = cb;
    };
    this.display = (hotkeys) => {
      this.clear();
      this.setName(this.command.name);
      const hotkeyDiv = this.controlEl.createDiv({
        cls: "setting-command-hotkeys"
      });
      for (const hotkey of hotkeys) {
        const warnClass = !!hotkey.warning ? " has-conflict" : "";
        const hotkeySpan = hotkeyDiv.createSpan({
          cls: "setting-hotkey" + warnClass,
          attr: { "aria-label": hotkey.warning }
        });
        const hotkeySpanText = hotkeySpan.createSpan({
          text: hotkey.chords.map((c) => c.toString()).join(" ") + " "
        });
        const deleteBtn = hotkeySpanText.createSpan({
          cls: "setting-hotkey-icon setting-delete-hotkey",
          attr: { "aria-label": "Delete hotkey" }
        });
        (0, import_obsidian2.setIcon)(deleteBtn, "cross", 8);
        deleteBtn.onClickEvent(() => {
          this.onDelete(this.command.id, hotkey.chords);
        });
      }
      const addBtn = this.controlEl.createSpan({
        cls: "setting-add-hotkey-button",
        attr: { "aria-label": "Customize this command" }
      });
      (0, import_obsidian2.setIcon)(addBtn, "any-key", 22);
      addBtn.onClickEvent(() => {
        const newHotkeySpan = hotkeyDiv.createSpan({
          cls: "setting-hotkey"
        });
        const newHotkeySpanText = newHotkeySpan.createSpan({
          text: "Press hotkey..."
        });
        const onUpdate = (chords) => {
          newHotkeySpanText.setText(chords.map((c) => c.toString()).join(" "));
        };
        const onComplete = (chords) => {
          var _a;
          this.setCancelCapture(void 0);
          (_a = this.onCreated) == null ? void 0 : _a.call(this, this.command.id, chords);
        };
        const chordCapturer = new CaptureChord(onUpdate, onComplete);
        this.setCancelCapture(chordCapturer.destruct);
        newHotkeySpan.addClass("mod-active");
        addBtn.hide();
        const menuBtn = this.controlEl.createSpan({
          cls: "setting-add-hotkey-button",
          attr: {
            "aria-label": `Add ${codeToString("Enter")} or ${codeToString("Escape")} key to sequence`
          }
        });
        (0, import_obsidian2.setIcon)(menuBtn, "plus", 22);
        const menu = new import_obsidian2.Menu(menuBtn).setNoIcon();
        menu.addItem((item) => item.setTitle("Add " + codeToString("Enter")).onClick(() => {
          chordCapturer.pushChord(new KeyChord("Enter"));
        }));
        menu.addItem((item) => item.setTitle("Add " + codeToString("Escape")).onClick(() => {
          chordCapturer.pushChord(new KeyChord("Escape"));
        }));
        menuBtn.onClickEvent((event) => {
          menu.showAtMouseEvent(event);
        });
        const doneBtn = this.controlEl.createSpan({
          cls: "setting-add-hotkey-button",
          attr: {
            "aria-label": "Accept hotkey sequence"
          }
        });
        (0, import_obsidian2.setIcon)(doneBtn, "checkbox-glyph", 22);
        doneBtn.onClickEvent(() => {
          onComplete(chordCapturer.chords);
        });
      });
    };
    this.command = command;
    this.onCreated = onCreated;
    this.onDelete = onDelete;
  }
};
var CaptureChord = class {
  constructor(onUpdate, onComplete) {
    this.pushChord = (c) => {
      this.chords.push(c);
      this.onUpdate(this.chords);
    };
    this.destruct = () => {
      this.chordListener.destruct();
    };
    this.chords = new Array();
    this.onUpdate = onUpdate;
    this.onComplete = onComplete;
    this.chordListener = new ChordListener((c) => {
      if (!c.alt && !c.ctrl && !c.shift && !c.meta && (c.key === "Enter" || c.key === "Escape")) {
        this.destruct();
        if (c.key === "Enter") {
          this.onComplete(this.chords);
        }
        return true;
      }
      this.pushChord(c);
      return true;
    });
  }
};
