import React from "react";

export default function ErrorMessage({ error }: { error: string }) {
  return error ? <p className="text-sm text-destructive mt-4">{error}</p> : null;
}