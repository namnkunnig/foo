import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Send, Delete } from "@mui/icons-material";
export default function Foo() {
  return (
    <>
      <div className="flex justify-center flex-col">
        <div className="flex gap-4 w-6/12 bg-white justify-center">
          <Button
            variant="outlined"
            onClick={() => alert("cancel")}
            color="secondary"
            startIcon={<Send />}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => alert("checkout")}
            color="secondary"
            startIcon={<Delete />}
          >
            Checkout
          </Button>
        </div>
        <div className="flex justify-center w-6/12 gap-1">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="Ettan"
              color="secondary"
            />
            <FormControlLabel disabled control={<Checkbox />} label="Tvåan" />
          </FormGroup>
        </div>
      </div>
    </>
  );
}
