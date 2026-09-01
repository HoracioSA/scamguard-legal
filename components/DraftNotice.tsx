/**
 * Visible on every legal page — the underlying documents still contain
 * bracketed placeholders (e.g. [LEGAL ENTITY NAME]) and have not been
 * reviewed by a lawyer. Remove this once both are actually finalized.
 */
export function DraftNotice() {
  return (
    <div className="draft-notice">
      <strong>Draft document.</strong> This page has not been reviewed by a lawyer and
      still contains placeholder fields shown in [brackets]. Do not treat this as a
      final, legally binding document until those are completed and it has been
      reviewed by qualified counsel.
    </div>
  );
}
