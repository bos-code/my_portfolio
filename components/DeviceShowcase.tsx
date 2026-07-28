type DeviceShowcaseProps = {
  title: string;
  desktop?: string;
  tablet?: string;
  mobile?: string;
};

function Screen({ src, alt, label }: { src?: string; alt: string; label: string }) {
  if (src) {
    return <img src={src} alt={alt} loading="lazy" />;
  }

  return (
    <div className="device-placeholder" aria-label={`${alt} screenshot pending`}>
      <span className="mono eyebrow">{label}</span>
      <strong>{alt}</strong>
      <small>Responsive capture will be added here</small>
    </div>
  );
}

export function DeviceShowcase({ title, desktop, tablet, mobile }: DeviceShowcaseProps) {
  return (
    <section className="device-showcase" aria-label={`${title} responsive device showcase`}>
      <div className="device-laptop">
        <div className="device-camera" />
        <div className="device-screen">
          <Screen src={desktop} alt={`${title} desktop interface`} label="Desktop / 1440px" />
        </div>
        <div className="device-laptop-base" />
      </div>

      <div className="device-tablet">
        <div className="device-camera" />
        <div className="device-screen">
          <Screen src={tablet} alt={`${title} tablet interface`} label="Tablet / 1024px" />
        </div>
      </div>

      <div className="device-phone">
        <div className="device-phone-island" />
        <div className="device-screen">
          <Screen src={mobile} alt={`${title} mobile interface`} label="Mobile / 390px" />
        </div>
      </div>
    </section>
  );
}
