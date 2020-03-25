const template = `
  <div class="main">
    <g-tabs block activeTab="Menu">
      <template v-for="(sections, title) in components" :slot="title">
        <template v-for="section in sections">
          <p class="u-fs-lg section-title">{{ section.label }}</p>
          <quick-preview :grid="section.grid || 1" :code="section.content.join('')" />
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

const lipsumLarge  = 'Chicharrones brooklyn cardigan marfa pour-over craft beer dreamcatcher cold-pressed brunch meggings. Live-edge disrupt narwhal irony neutra single-origin coffee, biodiesel before they sold out roof party venmo farm-to-table direct trade poke tousled aesthetic. Prism dreamcatcher glossier cloud bread blue bottle farm-to-table celiac chicharrones single-origin coffee salvia knausgaard raclette.';
const lipsumMedium = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque sapien quis purus tincidunt ultrices. Morbi rutrum, tellus et viverra tincidunt, diam ipsum laoreet risus, non tempus ligula arcu eget mi.';
const lipsumSmall  = 'Paleo gochujang heirloom salvia subway tile letterpress retro.';

const Main = {
  template,
  data: () => ({
    components: {
      Buttons: [
        {
          label: 'Types',
          visible: false,
          content: [
            `<g-button>Default</g-button>`,
            `<g-button primary>Primary</g-button>`,
            `<g-button variant="pill">Pill</g-button>`,
            `<g-button variant="basic">Basic</g-button>`,
            `<g-button variant="muted">Muted</g-button>`,
            `<g-button variant="anchor">Anchor</g-button>`
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
            `<g-button danger variant="anchor">Anchor</g-button>`
          ]
        },
        {
          label: 'Sizes',
          visible: false,
          content: [
            `<g-button size="sm">Small</g-button>`,
            `<g-button size="lg">Large</g-button>`,
            `<g-button full>Full</g-button>`
          ]
        },
        {
          label: 'States',
          visible: false,
          content: [
            `<g-button disabled>Disabled</g-button>`,
            `<g-button state="focused">Focused</g-button>`,
            `<g-button state="hovered">Hovered</g-button>`,
            `<g-button state="active">Active</g-button>`
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
            `</g-button>`
          ]
        }
      ],
      Callouts: [
        {
          visible: false,
          grid: 2,
          content: [
            `<g-callout title="Callout: Standard (Multi-line)" message="${lipsumLarge}" />`,
            `<g-callout title="Callout: Recessed (Multi-line)" message="${lipsumLarge}" type="recessed" />`,
            `<g-callout title="Callout: Standard (One-line)" message="${lipsumSmall}" />`,
            `<g-callout title="Callout: Recessed (One-line)" message="${lipsumSmall}" type="recessed" />`,
            `<g-callout title="Callout: Standard Dialog" message="${lipsumSmall}" dialog />`,
            `<g-callout title="Callout: Recessed Dialog" message="${lipsumSmall}" dialog type="recessed" />`,
          ]
        },
        {
          label: 'Alerts & Notifications',
          visible: false,
          grid: 2,
          content: [
            `<g-callout title="Success Callout: Well" message="${lipsumMedium}" type="success" />`,
            `<g-callout title="Success Callout: Dialog" message="${lipsumMedium}" type="success" dialog />`,
            `<g-callout title="Warning Callout: Well" message="${lipsumMedium}" type="warning" />`,
            `<g-callout title="Warning Callout: Dialog" message="${lipsumMedium}" type="warning" dialog />`,
            `<g-callout title="Error Callout: Well" message="${lipsumMedium}" type="error" />`,
            `<g-callout title="Error Callout: Dialog" message="${lipsumMedium}" type="error" dialog />`,
            `<g-callout title="Info Callout: Well" message="${lipsumMedium}" type="info" />`,
            `<g-callout title="Info Callout: Dialog" message="${lipsumMedium}" type="info" dialog />`,
          ]
        },
        {
          label: 'Close Button',
          visible: false,
          grid: 2,
          content: [
            `<g-callout canClose title="Success Callout: Well" message="${lipsumMedium}" type="success" />`,
            `<g-callout canClose title="Warning Callout: Well" message="${lipsumMedium}" type="warning" />`,
            `<g-callout canClose title="Error Callout: Well" message="${lipsumMedium}" type="error" />`,
            `<g-callout canClose title="Info Callout: Well" message="${lipsumMedium}" type="info" />`,
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
            `<g-checkbox label="Radio" variant="radio" hint="Hint" />`
          ]
        },
        {
          label: 'States',
          visible: false,
          content: [
            `<g-checkbox disabled label="Disabled" hint="Hint" />`,
            `<g-checkbox label="Checked" checked hint="Hint" />`,
            `<g-checkbox label="Toggle" checked variant="toggle" hint="Hint" />`,
            `<g-checkbox label="Radio" checked variant="radio" hint="Hint" />`
          ]
        }
      ],
      Dropdowns: [
        {
          visible: false,
          content: [
            `<g-dropdown label="Default" :options="[{value: 'value1', label: 'Value 1'}, {value: 'value2', label: 'Value 2'}, {value: 'value3', label: 'Value 3'}]" />`
          ]
        }
      ],
      Tags: [
        {
          label: 'Shapes',
          visible: false,
          content: [
            `<g-tag title="Default" />`,
            `<g-tag title="Pill" shape="pill" />`,
            `<g-tag title="Round" shape="round" />`
          ]
        },
        {
          label: 'Sizes',
          visible: false,
          content: [
            `<g-tag title="Small" size="sm" />`,
            `<g-tag title="Large" size="lg" />`
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
            `<g-tag title="Grey" color="grey" />`
          ]
        },
        {
          label: 'Closable',
          visible: false,
          content: [`<g-tag canClose title="Close me!" color="green" />`]
        }
      ],
      'Text & Textarea': [
        {
          label: 'Text Input',
          visible: false,
          content: [`<g-text-input label="Label" hint="Hint" />`]
        },
        {
          label: 'Text Area',
          visible: false,
          content: [`<g-text-area label="Label" hint="Hint" />`]
        }
      ],
      Breadcrumbs: [
        {
          label: 'Breadcrumbs',
          visible: false,
          content: [
            `<g-breadcrumb>`,
            ` <g-breadcrumb-item>One</g-breadcrumb-item>`,
            ` <g-breadcrumb-item>Two</g-breadcrumb-item>`,
            ` <g-breadcrumb-item current>Three</g-breadcrumb-item>`,
            `</g-breadcrumb>`
          ]
        }
      ],
      Menu: [
        {
          label: 'Basic Structure',
          visible: true,
          content: [
            `
            <g-menu open>
              <g-menu-item header>Using 
                <code class="c-code">ul > li</code>
              </g-menu-item>
              <g-menu-item>Option One</g-menu-item>
              <g-menu-item>Option Two</g-menu-item>
              <g-menu-item>Option Three</g-menu-item>
            </g-menu>
            `
          ]
        },
        {
          label: 'Show/Hide Animations',
          visible: true,
          content: []
        }
      ]
    }
  }),
  methods: {
    format(code) {
      return code.join('\n');
    }
  }
};

export default Main;
