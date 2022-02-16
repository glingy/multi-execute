# Multi Execute

Multi Execute will replace every selection in the current editor with the evaluation of a javascript expression independently. This allows for significantly easier complex editing with multiple cursors.

Command: `multi-execute.execute`

## JavaScript Parameters
 - `x`: The string value of the current selection
 - `i`: The index of the selection
 - `n`: The total # of selections
 - `l`: The index of the last selection
 - `a`: The readonly array of all selections

## Examples
`x + i`: Append an incrementing value starting from 0 to the end of each selection
`a[l - i]`: Reverse the order of the selections

## Release Notes

### 1.0.0

Initial release of Multi Execute
