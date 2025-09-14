import { useEffect } from "react";

export default function KajabiForm() {
  useEffect(() => {
    // Load external styles & scripts only once
    const link = document.createElement("link");
    link.href = "//fonts.googleapis.com/css?family=Open+Sans:400,700";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href =
      "https://kajabi-app-assets.kajabi-cdn.com/assets/form_embed-86c7521dc7acadef8d99e197de2254b9aa81274569ca6ca534de8e1dac7bc3a7.css";
    document.head.appendChild(style);

    const script = document.createElement("script");
    script.src =
      "https://kajabi-app-assets.kajabi-cdn.com/assets/form_embed-078db9fbd605f88cacf4be4e946422176a701acc2cd5302f65edd45a886797a1.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // cleanup if needed
      script.remove();
      link.remove();
      style.remove();
    };
  }, []);

  return (
    <div
      className="kajabi-form"
      dangerouslySetInnerHTML={{
        __html: `
          <div id="kajabi-form" class="kajabi-form--inline">
            <form data-parsley-validate="true" data-kjb-disable-on-submit="true"
              action="https://www.the-growth-academy.co/forms/2148615434/form_submissions"
              accept-charset="UTF-8" method="post">

              <div class="kajabi-form__content">
                <div class="kajabi-form__title">JOIN OUR NEXT COHORT</div>
                <div class="kajabi-form__subtitle">
                  <p>Learn the 5 steps to begin a high-paying MarTech career.</p>
                </div>
                <fieldset>
                  <div class="text-field kajabi-form__form-item">
                    <input type="text" name="form_submission[custom_1]" placeholder="First Name" required />
                  </div>
                  <div class="text-field kajabi-form__form-item">
                    <input type="text" name="form_submission[custom_2]" placeholder="Last Name" required />
                  </div>
                  <div class="email-field kajabi-form__form-item">
                    <input type="email" name="form_submission[email]" placeholder="Email" required />
                  </div>
                  <button class="kajabi-form__btn kajabi-form__btn--block-mobile" type="submit">
                    Learn More
                  </button>
                </fieldset>
              </div>
            </form>
          </div>
        `,
      }}
    />
  );
}
