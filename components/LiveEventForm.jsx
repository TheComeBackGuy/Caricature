import React from "react";

export default function LiveEventForm() {
  return (
    <form name="live-event" method="POST" data-netlify="true" onSubmit="submit">
      <input type="hidden" name="form-name" value="live-event" />

      <div>
        <label>
          First Name
          <input type="text" name="first-name" />
        </label>
      </div>
      <div>
        <label>
          <input type="email" name="email" />
        </label>
      </div>

      <div>
        <label>
          Any Comments?
          <textarea name="comments" />
        </label>
      </div>
      <button type="submit">Submit the Results</button>
    </form>
  );
}
