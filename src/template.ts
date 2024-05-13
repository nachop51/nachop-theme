import nachopColors, { type Schemas } from './nachop.js'

export default function template (schema: Schemas, isBordered: boolean) {
  const scheme = nachopColors[schema]

  return {
    name: `Nachop ${schema}${isBordered ? ' Bordered' : ''}`,
    type: schema,
    semanticHighlighting: true,
    semanticTokenColors: {
      'parameter.label': scheme.editor.fg.hex(),
      'variable.constant': {
        foreground: scheme.syntax.constant.brighten(0.4).hex()
      },
      'variable.defaultLibrary': {
        foreground: scheme.syntax.constant.brighten(0.4).hex()
      },
      macro: {
        foreground: scheme.syntax.constant.brighten(0.4).hex()
      }
    },
    colors: {
      // Base colors
      foreground: scheme.editor.fg.hex(),
      focusBorder: scheme.ui.borderActive.hex(),
      'widget.shadow': scheme.ui.panel.shadow.hex(),
      'selection.background': scheme.editor.selection.active.hex(),
      'icon.foreground': scheme.ui.fg.hex(),
      errorForeground: scheme.common.error.hex(),
      descriptionForeground: scheme.ui.fg.hex(),

      // Editor
      'editor.background': isBordered ? scheme.editor.bg.hex() : scheme.ui.bg.hex(),
      'editor.foreground': scheme.editor.fg.hex(),

      // -----------------------------------
      'editor.selectionBackground': scheme.editor.selection.active.hex(),
      'editor.selectionHighlightBackground': scheme.common.accent.alpha(0.3).hex(),
      'editor.selectionHighlightBorder': scheme.git.added.alpha(0).hex(),

      // Word highlight (when the cursor is on a word, highlights all other occurrences of that word)
      'editor.wordHighlightBackground': scheme.common.accent.alpha(0.7).hex(),
      'editor.wordHighlightStrongBackground': scheme.common.accent.alpha(0.7).hex(),
      'editor.wordHighlightBorder': scheme.common.accent.alpha(0.7).hex(),
      'editor.wordHighlightStrongBorder': scheme.common.accent.alpha(0.7).hex(),

      'editorBracketMatch.background': scheme.editor.gutter.normal.alpha(0.3).hex(),
      'editorBracketMatch.border': scheme.editor.gutter.active.alpha(0.3).hex(),

      // 'editorCursor.background': '#ffffffc9',
      'editorCursor.foreground': '#dc52ff',
      'editorIndentGuide.background1': scheme.editor.indentGuide.normal.hex(),
      'editorIndentGuide.activeBackground': scheme.editor.indentGuide.active.hex(),
      'editorLineNumber.foreground': scheme.editor.gutter.normal.hex(),
      'editorMarkerNavigation.background': scheme.ui.panel.bg.hex(),
      'editorRuler.foreground': scheme.editor.indentGuide.normal.hex(),
      'editorWhitespace.foreground': scheme.editor.gutter.normal.hex(),
      'editorWarning.foreground': scheme.common.warn.hex(),
      'editorError.foreground': scheme.common.error.hex(),

      // Editor widget
      'editorWidget.background': isBordered ? scheme.editor.bg.hex() : scheme.ui.panel.bg.hex(),
      'editorWidget.border': scheme.ui.border.hex(),
      'editorHoverWidget.background': isBordered ? scheme.ui.bg.hex() : scheme.ui.panel.bg.hex(),
      'editorHoverWidget.border': scheme.ui.border.hex(),
      'editorSuggestWidget.background': scheme.ui.panel.bg.hex(),
      'editorSuggestWidget.border': scheme.ui.border.hex(),
      'editorSuggestWidget.highlightForeground': scheme.common.accent.hex(),
      'editorSuggestWidget.selectedBackground': scheme.ui.selection.active.hex(),

      // Editor overview ruler
      'editorOverviewRuler.border': scheme.ui.border.hex(),
      'editorOverviewRuler.modifiedForeground': scheme.git.modified.hex(),
      'editorOverviewRuler.addedForeground': scheme.git.added.hex(),
      'editorOverviewRuler.deletedForeground': scheme.git.removed.hex(),
      'editorOverviewRuler.errorForeground': scheme.common.error.hex(),
      'editorOverviewRuler.warningForeground': scheme.common.accent.hex(),
      'editorOverviewRuler.bracketMatchForeground': scheme.editor.gutter.normal.alpha(0.7).hex(),
      'editorOverviewRuler.wordHighlightForeground': scheme.git.modified.alpha(0.4).hex(),
      'editorOverviewRuler.wordHighlightStrongForeground': scheme.git.added.alpha(0.4).hex(),
      'editorOverviewRuler.findMatchForeground': scheme.editor.findMatch.active.hex(),
      // -----------------------------------

      // Tabs options & editor groups
      'editorGroup.border': scheme.ui.borderActive.hex(),
      'editorGroup.background': scheme.ui.panel.bg.hex(),
      'editorGroupHeader.noTabsBackground': scheme.ui.bg.hex(),
      'editorGroupHeader.tabsBackground': scheme.ui.bg.hex(),
      'editorGroupHeader.tabsBorder': isBordered ? scheme.ui.border.hex() : scheme.ui.bg.hex(),
      'tab.activeBackground': scheme.common.primary.darken(1.6).alpha(0.5).hex(),
      'tab.hoverBackground': scheme.common.primary.darken(1.6).alpha(0.3).hex(),
      'tab.activeBorder': scheme.editor.bg.hex(),
      'tab.activeBorderTop': scheme.common.primary.hex(),
      'tab.unfocusedActiveBorderTop': scheme.ui.fg.hex(),
      'tab.activeForeground': scheme.editor.fg.hex(),
      'tab.border': scheme.ui.border.hex(),
      'tab.inactiveBackground': scheme.ui.bg.hex(),
      'tab.unfocusedHoverBackground': scheme.common.primary.darken(0.4).hex(),
      'tab.unfocusedActiveBorder': scheme.common.primary.alpha(0.4).hex(),
      'tab.inactiveForeground': scheme.ui.fg.hex(),
      'tab.unfocusedActiveForeground': scheme.ui.fg.hex(),
      'tab.unfocusedInactiveForeground': scheme.ui.fg.hex(),

      // Editor search
      'editor.findMatchBackground': scheme.editor.findMatch.active.hex(),
      'editor.findMatchBorder': scheme.editor.findMatch.active.hex(),
      'editor.findMatchHighlightBackground': scheme.editor.findMatch.inactive.hex(),
      'editor.findMatchHighlightBorder': scheme.editor.findMatch.inactive.darken(0.3).hex(),
      'editor.findRangeHighlightBackground': scheme.editor.findMatch.inactive.alpha(0.25).hex(),
      'editor.rangeHighlightBackground': scheme.editor.findMatch.active.alpha(0.2).hex(),
      // --------------------
      'editorInlayHint.background': scheme.ui.border.hex(),
      'editorInlayHint.foreground': scheme.ui.fg.hex(),
      // Editor Gutter
      'editorGutter.addedBackground': scheme.git.added.alpha(0.8),
      'editorGutter.deletedBackground': scheme.git.deleted.alpha(0.8),
      'editorGutter.modifiedBackground': scheme.git.modified.alpha(0.8),
      // List of files
      'list.activeSelectionBackground': scheme.ui.selection.active.hex(),
      'list.activeSelectionForeground': scheme.editor.fg.hex(),
      'list.focusBackground': scheme.ui.selection.active.hex(),
      'list.focusForeground': scheme.editor.fg.hex(),
      'list.focusOutline': scheme.ui.selection.active.hex(),
      'list.highlightForeground': scheme.common.accent.brighten(2).hex(),
      'list.deemphasizedForeground': scheme.common.error.hex(),
      'list.hoverBackground': scheme.ui.selection.active.hex(),
      'list.hoverForeground': scheme.editor.fg.darken(0.2).hex(),
      'list.inactiveSelectionBackground': scheme.ui.selection.normal.hex(),
      'list.inactiveSelectionForeground': scheme.ui.fg.hex(),
      'list.invalidItemForeground': scheme.ui.fg.alpha(0.3).hex(),
      'list.errorForeground': scheme.common.error.hex(),
      'list.warningForeground': scheme.common.warn.hex(),
      'tree.indentGuidesStroke': scheme.editor.indentGuide.active.hex(),

      'listFilterWidget.background': scheme.ui.panel.bg.hex(),
      'listFilterWidget.outline': scheme.common.accent.hex(),
      'listFilterWidget.noMatchesOutline': scheme.common.error.hex(),
      'list.filterMatchBackground': scheme.editor.findMatch.inactive.darken(0.3).hex(),
      'list.filterMatchBorder': scheme.editor.findMatch.inactive.hex(),
      // Peek view (the thing that shows up when you peek into a file)
      'peekView.border': scheme.ui.selection.active.hex(),

      'peekViewTitle.background': scheme.ui.selection.active.hex(),
      'peekViewTitleDescription.foreground': scheme.ui.fg.hex(),
      'peekViewTitleLabel.foreground': scheme.editor.fg.hex(),

      'peekViewEditor.background': isBordered ? scheme.ui.bg.hex() : scheme.ui.panel.bg.hex(),
      'peekViewEditor.matchHighlightBackground': scheme.editor.findMatch.inactive.hex(),
      'peekViewEditor.matchHighlightBorder': scheme.editor.findMatch.inactive.darken(0.3).hex(),

      'peekViewResult.background': isBordered ? scheme.ui.bg.hex() : scheme.ui.bg.hex(),
      'peekViewResult.fileForeground': scheme.editor.fg.hex(),
      'peekViewResult.lineForeground': scheme.ui.fg.hex(),
      'peekViewResult.matchHighlightBackground': scheme.editor.findMatch.inactive.hex(),

      'peekViewResult.selectionBackground': scheme.ui.selection.active.hex(),
      'peekViewResult.selectionForeground': scheme.editor.fg.brighten(10).hex(),

      // Menu options
      'menu.background': scheme.editor.bg.hex(),
      'menu.border': scheme.ui.border.hex(),
      'menu.foreground': scheme.editor.fg.darken(0.5).hex(),
      'menu.selectionBackground': scheme.ui.selection.active.hex(),
      'menu.selectionBorder': scheme.ui.selection.active.hex(),
      'menu.selectionForeground': scheme.editor.fg.hex(),
      'menu.separatorBackground': scheme.ui.fg.darken(1).hex(),
      'menubar.selectionBackground': scheme.ui.selection.active.hex(),
      'menubar.selectionBorder': scheme.ui.selection.active.hex(),
      'menubar.selectionForeground': scheme.editor.fg.hex(),

      // Button
      'button.background': scheme.common.accent.hex(),
      'button.foreground': scheme.editor.fg.hex(),
      'button.hoverBackground': scheme.common.accent.darken(0.2).hex(),
      'button.secondaryBackground': scheme.ui.fg.alpha(0.2).hex(),
      'button.secondaryForeground': scheme.editor.fg.hex(),
      'button.secondaryHoverBackground': scheme.ui.fg.alpha(0.5).hex(),

      // Text colors
      'textBlockQuote.background': scheme.ui.panel.bg.hex(),
      'textLink.foreground': scheme.common.accent.brighten(2).hex(),
      'textLink.activeForeground': scheme.common.accent.brighten(3).hex(),
      'textPreformat.background': scheme.editor.bg.brighten(0.8).hex(),
      'textPreformat.foreground': scheme.editor.fg.hex(),

      // Badge
      'badge.background': scheme.common.accent.alpha(0.2).hex(),
      'badge.foreground': scheme.common.accent.darken(0.2).hex(),

      // Extensions
      'extensionButton.prominentForeground': scheme.editor.bg.hex(),
      'extensionButton.prominentBackground': scheme.common.accent.hex(),
      'extensionButton.prominentHoverBackground': scheme.common.accent.darken(0.1).hex(),

      // Picker
      'pickerGroup.border': scheme.ui.border.hex(),
      'pickerGroup.foreground': scheme.ui.fg.alpha(0.5).hex(),

      // Progress bar
      'progressBar.background': scheme.common.accent.hex(),

      // DIFF EDITOR
      'diffEditor.insertedTextBackground': scheme.git.added.alpha(0.12).hex(),
      'diffEditor.removedTextBackground': scheme.git.removed.alpha(0.12).hex(),
      'diffEditor.diagonalFill': scheme.ui.border.hex(),

      // Welcome Page
      'welcomePage.tileBackground': scheme.ui.bg.hex(),
      'welcomePage.tileShadow': scheme.ui.panel.shadow.hex(),
      'welcomePage.progress.background': scheme.ui.borderActive.hex(),
      'welcomePage.buttonBackground': scheme.common.accent.alpha(0.4).hex(),
      'walkThrough.embeddedEditorBackground': scheme.ui.panel.bg.hex(),

      // Keybindings
      'keybindingLabel.background': scheme.ui.fg.alpha(0.1).hex(),
      'keybindingLabel.foreground': scheme.editor.fg.hex(),
      'keybindingLabel.border': scheme.editor.fg.alpha(0.1).hex(),
      'keybindingLabel.bottomBorder': scheme.editor.fg.alpha(0.1).hex(),

      // Settings
      'settings.focusedRowBackground': scheme.common.accent.alpha(0.2).hex(),
      'settings.headerForeground': scheme.editor.fg.hex(),
      'settings.checkboxBackground': scheme.ui.bg.darken(0.1).hex(),
      'settings.checkboxBorder': scheme.common.accent.alpha(0.5).hex(),
      'settings.checkboxForeground': scheme.editor.fg.alpha(0.7).hex(),

      // Scrollbar
      'scrollbar.shadow': scheme.ui.border.alpha(0.5).hex(),
      'scrollbarSlider.background': scheme.ui.fg.darken(1).alpha(0.4).hex(),
      'scrollbarSlider.hoverBackground': scheme.ui.fg.darken(1).alpha(0.6).hex(),
      'scrollbarSlider.activeBackground': scheme.ui.fg.alpha(0.7).hex(),

      // Input
      'input.background': scheme.editor.bg.hex(),
      'input.border': scheme.ui.fg.alpha(0.25).hex(),
      'input.foreground': scheme.editor.fg.hex(),
      'input.placeholderForeground': scheme.ui.fg.alpha(0.5).hex(),
      'inputOption.activeBorder': scheme.common.primary.alpha(0.3).hex(),
      'inputOption.activeBackground': scheme.common.primary.alpha(0.2).hex(),
      'inputOption.activeForeground': scheme.common.primary.hex(),
      'inputValidation.errorBackground': scheme.editor.bg.hex(),
      'inputValidation.errorBorder': scheme.common.error.hex(),
      'inputValidation.infoBackground': scheme.editor.bg.hex(),
      'inputValidation.infoBorder': scheme.common.info.hex(),
      'inputValidation.warningBackground': scheme.editor.bg.hex(),
      'inputValidation.warningBorder': scheme.common.warn.hex(),

      // Current cursor line
      'editor.lineHighlightBackground': scheme.ui.border.brighten(0.1).hex(),
      'editorLineNumber.activeForeground': scheme.editor.fg.hex(),

      // Side bar
      'sideBar.background': scheme.ui.bg.hex(),
      'sideBar.foreground': scheme.ui.fg.hex(),
      'sideBar.border': isBordered ? scheme.ui.border.hex() : scheme.ui.bg.hex(),
      'sideBarSectionHeader.background': scheme.ui.bg.hex(),
      'sideBarSectionHeader.foreground': scheme.ui.fg.brighten(1).hex(),
      'sideBarTitle.foreground': scheme.ui.fg.hex(),
      'sideBarSectionHeader.border': isBordered ? scheme.ui.border.hex() : scheme.ui.bg.hex(),

      // Status bar
      'statusBar.background': scheme.ui.bg.hex(),
      'statusBar.foreground': scheme.ui.fg.hex(),
      'statusBar.border': scheme.ui.border.hex(),
      'statusBar.debuggingBackground': scheme.common.warn.hex(),
      'statusBar.debuggingBorder': scheme.common.error.hex(),
      'statusBar.debuggingForeground': scheme.editor.fg.hex(),
      'statusBarItem.remoteBackground': scheme.common.primary.hex(),
      'statusBarItem.remoteForeground': scheme.ui.border.hex(),
      'statusBar.noFolderBackground': scheme.ui.bg.hex(),
      'statusBarItem.activeBackground': scheme.ui.fg.alpha(0.2).hex(),
      'statusBarItem.hoverBackground': scheme.ui.fg.alpha(0.2).hex(),
      'statusBarItem.prominentBackground': scheme.ui.border.hex(),
      'statusBarItem.prominentHoverBackground': '#00000030',

      // Activity bar
      'activityBar.background': isBordered ? scheme.editor.bg.hex() : scheme.ui.bg.hex(),
      'activityBar.foreground': scheme.editor.fg.hex(),
      'activityBar.inactiveForeground': scheme.ui.fg.alpha(0.6).hex(),
      'activityBar.activeBorder': scheme.common.primary.hex(),
      'activityBar.border': isBordered ? scheme.ui.border.hex() : scheme.ui.bg.hex(),
      'activityBarBadge.background': scheme.common.primary.hex(),
      'activityBarBadge.foreground': scheme.editor.fg.hex(),

      // Dropdowns
      'dropdown.background': scheme.ui.bg.hex(),
      'dropdown.foreground': scheme.ui.fg.hex(),
      'dropdown.border': scheme.ui.fg.alpha(0.27).hex(),

      // Debug
      'debugToolBar.background': scheme.ui.panel.bg.hex(),
      'debugExceptionWidget.border': scheme.ui.border.hex(),
      'debugExceptionWidget.background': scheme.ui.panel.bg.hex(),
      'debugIcon.breakpointForeground': scheme.syntax.operator.hex(),
      'debugIcon.breakpointDisabledForeground': scheme.syntax.operator.alpha(0.5).hex(),
      'debugConsoleInputIcon.foreground': scheme.common.accent.hex(),

      // Title bar
      'titleBar.activeBackground': scheme.ui.bg.hex(),
      'titleBar.activeForeground': scheme.editor.fg.hex(),
      'titleBar.inactiveBackground': scheme.ui.bg.hex(),
      'titleBar.inactiveForeground': scheme.ui.fg.hex(),
      'titleBar.border': isBordered ? scheme.ui.border.hex() : scheme.ui.bg.hex(),

      // Panel options (the bar that contains Problems, Output, Terminal, etc)
      'panel.background': scheme.ui.bg.hex(),
      'panel.border': scheme.ui.border.hex(),
      'panelTitle.activeBorder': scheme.common.primary.hex(),
      'panelTitle.activeForeground': scheme.editor.fg.hex(),
      'panelTitle.inactiveForeground': scheme.ui.fg.hex(),

      // Git things
      'gitDecoration.modifiedResourceForeground': scheme.git.modified.hex(),
      'gitDecoration.deletedResourceForeground': scheme.git.deleted.hex(),
      'gitDecoration.untrackedResourceForeground': scheme.git.added.hex(),
      'gitDecoration.ignoredResourceForeground': scheme.ui.fg.alpha(0.5).hex(),
      'gitDecoration.conflictingResourceForeground': scheme.common.error.alpha(0.7).hex(),
      'gitDecoration.submoduleResourceForeground': scheme.syntax.constant.alpha(0.7).hex(),

      // Minimap options
      'minimap.background': isBordered ? scheme.editor.bg.hex() : scheme.ui.bg.hex(),
      'minimap.selectionHighlight': scheme.editor.selection.active.hex(),
      'minimap.errorHighlight': scheme.common.error.hex(),
      'minimap.findMatchHighlight': scheme.editor.findMatch.active.hex(),
      'minimapGutter.addedBackground': scheme.git.added.hex(),
      'minimapGutter.deletedBackground': scheme.git.deleted.hex(),
      'minimapGutter.modifiedBackground': scheme.git.modified.hex(),

      // Terminal
      'terminal.background': scheme.terminal.background.hex(),
      'terminal.foreground': scheme.terminal.foreground.hex(),
      'terminal.ansiBlack': scheme.terminal.ansiBlack.hex(),
      'terminal.ansiRed': scheme.terminal.ansiRed.hex(),
      'terminal.ansiGreen': scheme.terminal.ansiGreen.hex(),
      'terminal.ansiYellow': scheme.terminal.ansiYellow.hex(),
      'terminal.ansiBlue': scheme.terminal.ansiBlue.hex(),
      'terminal.ansiMagenta': scheme.terminal.ansiMagenta.hex(),
      'terminal.ansiCyan': scheme.terminal.ansiCyan.hex(),
      'terminal.ansiWhite': scheme.terminal.ansiWhite.hex(),
      'terminal.ansiBrightBlack': scheme.terminal.ansiBrightBlack.hex(),
      'terminal.ansiBrightRed': scheme.terminal.ansiBrightRed.hex(),
      'terminal.ansiBrightGreen': scheme.terminal.ansiBrightGreen.hex(),
      'terminal.ansiBrightYellow': scheme.terminal.ansiBrightYellow.hex(),
      'terminal.ansiBrightBlue': scheme.terminal.ansiBrightBlue.hex(),
      'terminal.ansiBrightMagenta': scheme.terminal.ansiBrightMagenta.hex(),
      'terminal.ansiBrightCyan': scheme.terminal.ansiBrightCyan.hex(),
      'terminal.ansiBrightWhite': scheme.terminal.ansiBrightWhite.hex()
    },
    tokenColors: [
      {
        name: 'Comment',
        scope: ['comment', 'punctuation.definition.comment'],
        settings: {
          fontStyle: 'italic bold',
          foreground: scheme.syntax.comment.hex()
        }
      },
      {
        name: 'Variables',
        scope: [
          'variable',
          'variable.parameter.function-call',
          'variable.language'
        ],
        settings: {
          foreground: scheme.syntax.variables.hex()
        }
      },
      {
        name: 'Const variables',
        scope: ['variable.other.constant', 'constant.other.color'],
        settings: {
          foreground: scheme.syntax.constant.hex()
        }
      },
      {
        name: 'Language defined stuff (funcs, methods, etc)',
        scope: ['variable.member'],
        settings: {
          foreground: '#f28779'
        }
      },
      {
        name: 'Invalid',
        scope: ['invalid'],
        settings: {
          foreground: scheme.common.error.hex()
        }
      },
      {
        name: 'Import, Export, Return, etc',
        scope: ['keyword', 'keyword.control', 'keyword.other'],
        settings: {
          foreground: scheme.syntax.keyword.hex()
        }
      },
      {
        name: 'Assignment Operator, others',
        scope: ['storage.type', 'storage.modifier'],
        settings: {
          foreground: scheme.syntax.keyword.hex()
        }
      },
      {
        name: 'Operators',
        scope: ['keyword.operator', 'keyword.operator.assignment.go'],
        settings: {
          foreground: scheme.syntax.keyword.hex()
        }
      },
      {
        name: 'String',
        scope: ['string', 'constant.other.symbol'],
        settings: {
          foreground: scheme.syntax.string.hex()
        }
      },
      {
        name: 'Semi colon, comma, etc',
        scope: ['punctuation.separator', 'punctuation.terminator'],
        settings: {
          foreground: scheme.syntax.punctuation.hex(),
          fontStyle: 'bold'
        }
      },
      {
        name: 'Operator, Misc', // I don't know what this is for
        scope: [
          'constant.other.color',
          'keyword.other.template',
          'keyword.other.substitution'
        ],
        settings: {
          foreground: '#eeff00'
        }
      },
      {
        name: 'Function name',
        scope: ['entity.name.function', 'support.function.go'],
        settings: {
          foreground: scheme.syntax.func.name.hex(),
          fontStyle: 'bold'
        }
      },
      {
        name: 'Library function (fetch in js, etc)',
        scope: ['support.function', 'support.macro'],
        settings: {
          foreground: '#9bd1ff',
          fontStyle: 'bold'
        }
      },
      {
        name: 'Language variable (this in js, etc)',
        scope: ['variable.language'],
        settings: {
          fontStyle: 'italic',
          foreground: '#cf9bff'
        }
      },
      {
        name: 'Function call',
        scope: [
          'variable.function',
          'variable.annotation',
          'meta.function-call.generic'
        ],
        settings: {
          foreground: '#ffd173'
        }
      },
      {
        name: 'Library constant',
        scope: ['support.constant'],
        settings: {
          fontStyle: 'italic',
          foreground: '#f29e74'
        }
      },
      {
        name: 'Imports and packages',
        scope: ['entity.name.import', 'entity.name.package'],
        settings: {
          foreground: '#d5ff80'
        }
      },
      {
        name: 'diff.header',
        scope: ['meta.diff', 'meta.diff.header'],
        settings: {
          foreground: '#c594c5'
        }
      },
      {
        name: 'String interpolation',
        scope: [
          'punctuation.definition.template-expression.begin',
          'punctuation.definition.template-expression.end',
          'punctuation.section.embedded'
        ],
        settings: {
          foreground: '#ad72f3'
        }
      },
      // Python things
      {
        name: 'Python special parameter -> self & cls',
        scope: [
          'variable.parameter.function.language.special.self.python',
          'variable.parameter.function.language.special.cls.python'
        ],
        settings: {
          foreground: '#fdef94'
        }
      },
      {
        name: 'python function decorator @',
        scope: [
          'meta.function.decorator.python',
          'support.token.decorator.python,meta.function.decorator.identifier.python'
        ],
        settings: {
          foreground: '#fdef94'
        }
      },
      // ------------------
      {
        name: 'Function parameter | argument',
        scope: [
          'variable.parameter.function.language.python',
          'variable.parameter.function.python',
          'variable.parameter.function.js',
          'variable.parameter.function',
          'variable.parameter',
          'meta.definition.variable.name',
          'meta.parameter'
        ],
        settings: {
          foreground: '#e5bdff',
          fontStyle: 'italic'
        }
      },
      {
        scope: ['message.error'],
        settings: {
          foreground: '#ff6666'
        }
      },
      {
        name: 'Number, Constant, Tag Attribute, Embedded',
        scope: [
          'constant.numeric',
          'constant.language',
          'support.constant',
          'constant.character',
          'constant.escape',
          'keyword.other.unit',
          'keyword.other'
        ],
        settings: {
          foreground: '#F78C6C'
        }
      },
      {
        name: 'Tag',
        scope: [
          'entity.name.tag',
          'meta.tag.sgml',
          'markup.deleted.git_gutter'
        ],
        settings: {
          foreground: '#f07178'
        }
      },
      {
        name: 'Function and & Lambda arrow',
        scope: ['storage.type.function'],
        settings: {
          foreground: '#ad72f3'
        }
      },
      {
        name: 'Accessor',
        scope: ['punctuation.accessor'],
        settings: {
          foreground: '#f29e74'
        }
      },
      {
        name: 'String, Symbols, Inherited Class, Markup Heading',
        scope: [
          'constant.other.key',
          'entity.other.inherited-class',
          'markup.heading',
          'markup.inserted.git_gutter',
          'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js'
        ],
        settings: {
          foreground: '#b7e276'
        }
      },
      {
        name: 'go operator',
        scope: [
          'keyword.operator.arithmetic.go',
          'keyword.operator.address.go'
        ],
        settings: {
          foreground: '#c678dd'
        }
      },
      {
        name: 'Go package name',
        scope: ['entity.name.package.go'],
        settings: {
          foreground: '#ffd173'
        }
      },
      {
        name: 'Go stuff',
        scope: 'source.go storage.type',
        settings: {
          foreground: '#f5dd87'
        }
      },
      {
        name: 'Class, Support',
        scope: [
          'entity.name',
          'support.type',
          'support.class',
          'support.other.namespace.use.php',
          'meta.use.php',
          'support.other.namespace.php',
          'markup.changed.git_gutter',
          'support.type.sys-types'
        ],
        settings: {
          foreground: '#FFCB6B'
        }
      },
      {
        name: 'Entity Types',
        scope: ['support.type'],
        settings: {
          foreground: '#f5dd87'
        }
      },
      {
        name: 'Sub-methods',
        scope: [
          'entity.name.module.js',
          'variable.import.parameter.js',
          'variable.other.class.js'
        ],
        settings: {
          foreground: '#cf9bff'
        }
      },
      {
        name: 'entity.name.method.js',
        scope: ['entity.name.method.js'],
        settings: {
          fontStyle: 'italic',
          foreground: '#79b9ee'
        }
      },
      {
        name: 'meta.method.js',
        scope: [
          'meta.class-method.js entity.name.function.js',
          'variable.function.constructor'
        ],
        settings: {
          foreground: '#79b9ee'
        }
      },
      // JS Stuff
      {
        name: 'Decorators/annotation',
        scope: [
          'meta.decorator variable.other',
          'meta.decorator punctuation.decorator',
          'storage.type.annotation'
        ],
        settings: {
          foreground: '#ffdfb3'
        }
      },
      {
        name: 'ES7 Bind Operator',
        scope: [
          'source.js constant.other.object.key.js string.unquoted.label.js'
        ],
        settings: {
          fontStyle: 'italic',
          foreground: '#FF5370'
        }
      },
      // HTML Related
      {
        name: 'HTML Tags',
        scope: [
          'punctuation.definition.tag',
          'punctuation.definition.tag.html',
          'punctuation.definition.tag.begin.html',
          'punctuation.definition.tag.end.html'
        ],
        settings: {
          foreground: '#b51d87'
        }
      },
      {
        name: 'HTML Tag HTML inside',
        scope: [
          'meta.tag',
          'text.html.basic',
          'text.html.basic source',
          'text.html.basic source.html',
          'text.html.basic source.html entity.other.attribute-name',
          'text.html.basic source.html entity.other.attribute-name.html',
          'text.html.basic source.html entity.other.attribute-value',
          'text.html.basic source.html punctuation.definition.string',
          'text.html.basic source.html string.quoted.double',
          'text.html.basic source.html string.quoted.single',
          'text.html.basic source.html string.unquoted'
        ],
        settings: {
          foreground: '#dccfeb'
        }
      },
      {
        name: 'HTML & JSX Properties/Attributes',
        scope: ['entity.other.attribute-name'],
        settings: {
          foreground: '#dc9e65',
          fontStyle: 'italic'
        }
      },
      // CSS
      {
        name: 'CSS Class and Support',
        scope: [
          'source.css support.type.property-name',
          'source.sass support.type.property-name',
          'source.scss support.type.property-name',
          'source.less support.type.property-name',
          'source.stylus support.type.property-name',
          'source.postcss support.type.property-name'
        ],
        settings: {
          foreground: '#b6e9f3',
          fontStyle: 'italic'
        }
      },
      {
        name: 'CSS Classes',
        scope: ['entity.other.attribute-name.class'],
        settings: {
          foreground: '#FFCB6B'
        }
      },
      {
        name: "CSS ID's",
        scope: ['source.sass keyword.control'],
        settings: {
          foreground: '#82AAFF'
        }
      },
      {
        name: 'CSS browser prefix',
        scope: [
          'source.css support.type',
          'source.sass support.type',
          'source.scss support.type',
          'source.less support.type',
          'source.stylus support.type'
        ],
        settings: {
          foreground: '#b8cfe680'
        }
      },
      // RegExp & Escape Chars, URLS
      {
        name: 'Regular Expressions and Escape chars',
        scope: ['string.regexp', 'constant.character', 'constant.other'],
        settings: {
          foreground: '#95e6cb'
        }
      },
      {
        name: 'URL',
        scope: ['*url*', '*link*', '*uri*'],
        settings: {
          fontStyle: 'underline'
        }
      },
      // --------------------
      {
        name: 'Inserted',
        scope: ['markup.inserted'],
        settings: {
          foreground: '#C3E88D'
        }
      },
      {
        name: 'Deleted',
        scope: ['markup.deleted'],
        settings: {
          foreground: '#FF5370'
        }
      },
      {
        name: 'Changed',
        scope: ['markup.changed'],
        settings: {
          foreground: '#ad72f3'
        }
      },
      // JSON
      {
        name: 'JSON Key - Level 0',
        scope: [
          'source.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: '#ad72f3'
        }
      },
      {
        name: 'JSON Key - Level 1',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: '#FFCB6B'
        }
      },
      {
        name: 'JSON Key - Level 2',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: '#F78C6C'
        }
      },
      {
        name: 'JSON Key - Level 3',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: '#FF5370'
        }
      },
      {
        name: 'JSON Key - Level 4',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: '#C17E70'
        }
      },
      {
        name: 'JSON Key - Level 5',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: '#82AAFF'
        }
      },
      {
        name: 'JSON Key - Level 6',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: '#f07178'
        }
      },
      {
        name: 'JSON Key - Level 7',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: '#ad72f3'
        }
      },
      {
        name: 'JSON Key - Level 8',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: '#C3E88D'
        }
      },
      // ----------------------
      // Markdown
      {
        name: 'Markdown - Plain',
        scope: [
          'text.html.markdown',
          'punctuation.definition.list_item.markdown'
        ],
        settings: {
          foreground: '#EEFFFF'
        }
      },
      {
        name: 'Markdown - Markup Raw Inline',
        scope: ['text.html.markdown markup.inline.raw.markdown'],
        settings: {
          foreground: '#ad72f3'
        }
      },
      {
        name: 'Markdown - Markup Raw Inline Punctuation',
        scope: [
          'text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown'
        ],
        settings: {
          foreground: '#65737E'
        }
      },
      {
        name: 'Markdown - Heading',
        scope: [
          'markdown.heading',
          'markup.heading | markup.heading entity.name',
          'markup.heading.markdown punctuation.definition.heading.markdown'
        ],
        settings: {
          foreground: '#C3E88D'
        }
      },
      {
        name: 'Markup - Italic',
        scope: ['markup.italic'],
        settings: {
          fontStyle: 'italic',
          foreground: '#f07178'
        }
      },
      {
        name: 'Markup - Bold',
        scope: ['markup.bold', 'markup.bold string'],
        settings: {
          fontStyle: 'bold',
          foreground: '#f07178'
        }
      },
      {
        name: 'Markup - Bold-Italic',
        scope: [
          'markup.bold markup.italic',
          'markup.italic markup.bold',
          'markup.quote markup.bold',
          'markup.bold markup.italic string',
          'markup.italic markup.bold string',
          'markup.quote markup.bold string'
        ],
        settings: {
          fontStyle: 'bold',
          foreground: '#f07178'
        }
      },
      {
        name: 'Markup - Underline',
        scope: ['markup.underline'],
        settings: {
          fontStyle: 'underline',
          foreground: '#F78C6C'
        }
      },
      {
        name: 'Markdown - Blockquote',
        scope: ['markup.quote punctuation.definition.blockquote.markdown'],
        settings: {
          foreground: '#65737E'
        }
      },
      {
        name: 'Markup - Quote',
        scope: ['markup.quote'],
        settings: {
          fontStyle: 'italic'
        }
      },
      {
        name: 'Markdown - Link',
        scope: ['string.other.link.title.markdown'],
        settings: {
          foreground: '#82AAFF'
        }
      },
      {
        name: 'Markdown - Link Description',
        scope: ['string.other.link.description.title.markdown'],
        settings: {
          foreground: '#ad72f3'
        }
      },
      {
        name: 'Markdown - Link Anchor',
        scope: ['constant.other.reference.link.markdown'],
        settings: {
          foreground: '#FFCB6B'
        }
      },
      {
        name: 'Markup - Raw Block',
        scope: ['markup.raw.block'],
        settings: {
          foreground: '#ad72f3'
        }
      },
      {
        name: 'Markdown - Raw Block Fenced',
        scope: ['markup.raw.block.fenced.markdown'],
        settings: {
          foreground: '#00000050'
        }
      },
      {
        name: 'Markdown - Fenced Bode Block',
        scope: ['punctuation.definition.fenced.markdown'],
        settings: {
          foreground: '#00000050'
        }
      },
      {
        name: 'Markdown - Fenced Bode Block Variable',
        scope: [
          'markup.raw.block.fenced.markdown',
          'variable.language.fenced.markdown',
          'punctuation.section.class.end'
        ],
        settings: {
          foreground: '#EEFFFF'
        }
      },
      {
        name: 'Markdown - Fenced Language',
        scope: ['variable.language.fenced.markdown'],
        settings: {
          foreground: '#65737E'
        }
      },
      {
        name: 'Markdown - Separator',
        scope: ['meta.separator'],
        settings: {
          fontStyle: 'bold',
          foreground: '#65737E'
        }
      },
      {
        name: 'Markup - Table',
        scope: ['markup.table'],
        settings: {
          foreground: '#EEFFFF'
        }
      }
    ]
  }
}
