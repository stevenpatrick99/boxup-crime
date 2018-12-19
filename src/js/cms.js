import React from "react";
import CMS from "netlify-cms";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import ServicesPreview from "./cms-preview-templates/services";
import ServicesCommunityPreview from "./cms-preview-templates/services";
import ServicesKidsPreview from "./cms-preview-templates/services";
import ServicesSchoolsPreview from "./cms-preview-templates/services";
import ServicesMentorsPreview from "./cms-preview-templates/services";
import UpcomingPreview from "./cms-preview-templates/upcoming";
import CareersPreview from "./cms-preview-templates/careers";
import VisionPreview from "./cms-preview-templates/vision";
import ContactPreview from "./cms-preview-templates/contact";
import LocationsPreview from "./cms-preview-templates/locations";



// Example of creating a custom color widget
class ColorControl extends React.Component {
  render() {
    return <input
        style={{height: "80px"}}
        type="color"
        value={this.props.value}
        onInput={(e) => this.props.onChange(e.target.value)}
    />;
  }
}

CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("services", ServicesPreview);
CMS.registerPreviewTemplate("upcoming", UpcomingPreview);
CMS.registerPreviewTemplate("careers", CareersPreview);
CMS.registerPreviewTemplate("vision", VisionPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerPreviewTemplate("locations", LocationsPreview);
CMS.registerWidget("color", ColorControl);
