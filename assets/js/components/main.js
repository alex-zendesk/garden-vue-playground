const template = `
  <div class="main">
    <g-tabs block :activeTab="0">
      <template v-for="(sections, title) in components" :slot="title">
        <template v-for="section in sections">
          <p class="u-fs-lg section-title">{{ section.label }}</p>
          <quick-preview :code="section.content.join('')" />
          <div class="source">
            <g-button variant="basic" @click="section.visible = !section.visible">
              <g-icon icon="zd-svg-icon-16-eye-stroke" />
              <span v-if="section.visible">Hide Code</span>
              <span v-else>View Code</span>
            </g-button>
            <br />
            <pre v-show="section.visible"><code class="language-html">{{ format(section.content) }}</code></pre>
          </div>
        </template>
      </template>
    </g-tabs>
  </div>
`;

const Main = {
  template,
  data: () => ({
    components: {
      'Buttons': [
        {
          label: 'Types',
          visible: false,
          content: [
            `<g-button>Default</g-button>`,
            `<g-button primary>Primary</g-button>`,
            `<g-button variant="pill">Pill</g-button>`,
            `<g-button variant="basic">Basic</g-button>`,
            `<g-button variant="muted">Muted</g-button>`,
            `<g-button variant="anchor">Anchor</g-button>`,
          ]
        },
        {
          label: 'Danger',
          visible: false,
          content: [
            `<g-button danger>Default</g-button>`,
            `<g-button danger primary>Primary</g-button>`,
            `<g-button danger variant="pill">Pill</g-button>`,
            `<g-button danger variant="basic">Basic</g-button>`,
            `<g-button danger variant="muted">Muted</g-button>`,
            `<g-button danger variant="anchor">Anchor</g-button>`,
          ]
        },
        {
          label: 'Sizes',
          visible: false,
          content: [
            `<g-button size="sm">Small</g-button>`,
            `<g-button size="lg">Large</g-button>`,
            `<g-button full>Full</g-button>`,
          ]
        },
        {
          label: 'States',
          visible: false,
          content: [
            `<g-button disabled>Disabled</g-button>`,
            `<g-button state="focused">Focused</g-button>`,
            `<g-button state="hovered">Hovered</g-button>`,
            `<g-button state="active">Active</g-button>`,
          ]
        },
        {
          label: 'Icons',
          visible: false,
          content: [
            `<g-button icon>`,
            `    <g-icon icon="zd-svg-icon-26-zendesk" />`,
            `</g-button>`,
            `<g-button icon>`,
            `    <g-icon icon="zd-svg-icon-26-book" />`,
            `</g-button>`,
          ]
        }
      ],
      'Callouts': [
        {
          label: 'Standard',
          visible: false,
          content: [
            `<g-callout title="Callout: Standard" message="Callout body" />`,
          ]
        },
        {
          label: 'Alerts & Notifications',
          visible: false,
          content: [
            `<g-callout type="success" title="Callout: Success" message="Callout body" />`,
            `<g-callout type="warning" title="Callout: Warning" message="Callout body" />`,
            `<g-callout type="error" title="Callout: Error" message="Callout body" />`,
            `<g-callout type="info" title="Callout: Info" message="Callout body" />`,
            `<g-callout type="recessed" title="Callout: Recessed" message="Callout body" />`,
          ]
        },
        {
          label: 'Closable',
          visible: false,
          content: [
            `<g-callout canClose type="success" title="Callout: Success" message="Callout body" />`,
          ]
        }
      ],
      'Checkboxes, Toggles, & Radios': [
        {
          label: 'Types',
          visible: false,
          content: [
            `<g-checkbox label="Default" hint="Hint" />`,
            `<g-checkbox label="Toggle" variant="toggle" hint="Hint" />`,
            `<g-checkbox label="Radio" variant="radio" hint="Hint" />`,
          ]
        },
        {
          label: 'States',
          visible: false,
          content: [
            `<g-checkbox disabled label="Disabled" hint="Hint" />`,
            `<g-checkbox label="Checked" checked hint="Hint" />`,
            `<g-checkbox label="Toggle" checked variant="toggle" hint="Hint" />`,
            `<g-checkbox label="Radio" checked variant="radio" hint="Hint" />`,
          ]
        },
      ],
      'Dropdowns': [
        {
          visible: false,
          content: [
            `<g-dropdown label="Default" :options="[{value: 'value1', label: 'Value 1'}, {value: 'value2', label: 'Value 2'}, {value: 'value3', label: 'Value 3'}]" />`,
          ]
        },
      ],
      'Tags': [
        {
          label: 'Shapes',
          visible: false,
          content: [
            `<g-tag title="Default" />`,
            `<g-tag title="Pill" shape="pill" />`,
            `<g-tag title="Round" shape="round" />`,
          ]
        },
        {
          label: 'Sizes',
          visible: false,
          content: [
            `<g-tag title="Small" size="sm" />`,
            `<g-tag title="Large" size="lg" />`,
          ]
        },
        {
          label: 'Colors',
          visible: false,
          content: [
            `<g-tag title="Red" color="red" />`,
            `<g-tag title="Yellow" color="yellow" />`,
            `<g-tag title="Green" color="green" />`,
            `<g-tag title="Blue" color="blue" />`,
            `<g-tag title="Grey" color="grey" />`,
          ]
        },
        {
          label: 'Closable',
          visible: false,
          content: [
            `<g-tag canClose title="Close me!" color="green" />`,
          ]
        },
      ],
      'Text & Textarea': [
        {
          label: 'Text Input',
          visible: false,
          content: [
            `<g-text-input label="Label" hint="Hint" />`,
          ]
        },
        {
          label: 'Text Area',
          visible: false,
          content: [
            `<g-text-area label="Label" hint="Hint" />`,
          ]
        },
      ]
    }
  }),
  methods: {
    format(code) {
      return code.join("\n");
    }
  }
};

export default Main;
