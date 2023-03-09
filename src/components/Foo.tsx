import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Tooltip,
  FormControl,
  RadioGroup,
  FormLabel,
  Radio,
} from "@mui/material";
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
          <Tooltip title="Foo" arrow>
            <IconButton>
              <Delete></Delete>
            </IconButton>
          </Tooltip>
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
        <div className="flex justify-center w-6/12 gap-1">
          <Card>
            <CardContent sx={{ color: "red" }}>Foo</CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
        <div className="flex justify-center w-6/12 gap-1">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              onChange={() => alert("Fii")}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </>
  );
}
