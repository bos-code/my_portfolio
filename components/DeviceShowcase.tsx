type DeviceShowcaseProps = {
  title: string;
  desktop?: string;
  tablet?: string;
  mobile?: string;
  liveUrl?: string;
};

type ScreenProps = {
  src?: string;
  liveUrl?: string;
  alt: string;
  label: string;
  viewport: "desktop" | "tablet" | "mobile";
};

function Screen({ src, liveUrl, alt, label, viewport }: ScreenProps) {
  if (src) {
    return <img src={src} alt={alt} loading="lazy" />;
  }

  if (liveUrl) {
    return (
      <div className={`device-live-preview device-live-${viewport}`} aria-label={`${alt} live preview`}>
        <iframe
          src={liveUrl}
          title={`${alt} live preview`}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          referrerPolicy="no-referrer"
          tabIndex={-1}
        />
        <span className="device-preview-badge mono">Live / {label}</span>
      </div>
    );
  }

  return (
    <div className="device-placeholder" aria-label={`${alt} preview pending`}>
      <span className="mono eyebrow">{label}</span>
      <strong>{alt}</strong>
      <small>A verified live deployment or real project capture will be added here.</small>
    </div>
  );
}

export function DeviceShowcase({ title, desktop, tablet, mobile, liveUrl }: DeviceShowcaseProps) {
  return (
    <section className="device-showcase" aria-label={`${title} responsive device showcase`}>
      <div className="device-laptop">
        <div className="device-camera" />
        <div className="device-screen">
          <Screen src={desktop} liveUrl={liveUrl} alt={`${title} desktop interface`} label="Desktop / 1440px" viewport="desktop" />
        </div>
        <div className="device-laptop-base" />
      </div>

      <div className="device-tablet">
        <div className="device-camera" />
        <div className="device-screen">
          <Screen src={tablet} liveUrl={liveUrl} alt={`${title} tablet interface`} label="Tablet / 1024px" viewport="tablet" />
        </div>
      </div>

      <div className="device-phone">
        <div className="device-phone-island" />
        <div className="device-screen">
          <Screen src={mobile} liveUrl={liveUrl} alt={`${title} mobile interface`} label="Mobile / 390px" viewport="mobile" />
        </div>
      </div>
    </section>
  );
}
