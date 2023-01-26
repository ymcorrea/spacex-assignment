export interface LauncherType {
  flight_number: number;
  mission_name: string;
  mission_id: string[];
  launch_year: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_date_local: string;
  is_tentative: boolean;
  tentative_max_precision: string;
  tbd: boolean;
  launch_window: number;
  rocket: RocketType;
  ships: string[];
  telemetry: {
    telemetry: string | null;
  };
  launch_site: LunchSite;
  launch_success: boolean;
  links: LinkType;
  upcoming: boolean;
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  crew: string | null;
  details: string;
}

export interface RocketType {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
}

export interface LinkType {
  mission_patch: string;
  mission_patch_small: string;
  reddit_campaign: string;
  reddit_launch: string;
  reddit_recovery: string | null;
  reddit_media: string;
  presskit: string;
  article_link: string;
  wikipedia: string;
  video_link: string;
  youtube_id: string;
  flickr_images: string[];
}

export interface LunchSite {
  site_id: string;
  site_name: string;
  site_name_long: string;
}

export interface LaunchCardProps {
  launcher: LauncherType;
}
