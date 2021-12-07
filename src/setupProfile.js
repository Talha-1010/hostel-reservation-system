import Nav from "./Navbar"
function SetupProfilePage() {
  return (
    <div>
    <Nav/>
    <h1>Setup Profile</h1>
    <form class="row g-3">
    
        <div class="col-md-4">
            <label for="validationDefaultUsername" class="form-label">User Name</label>
            <div class="input-group">
            <span class="input-group-text" id="inputGroupPrepend2">@</span>
            <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
            </div>
        </div>
        <div class="col-md-4">
            <label for="validationDefault01" class="form-label">Email</label>
            <input type="email" class="form-control" id="validationDefault01"  required/>
        </div>
        <div class="col-md-4">
            <label for="validationDefault03" class="form-label">Password</label>
            <input type="password" class="form-control" id="validationDefault03" required/>
        </div>
        <div class="col-12">
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
            <label class="form-check-label" for="invalidCheck2">
                Agree to terms and conditions
            </label>
            </div>
        </div>
        <div class="col-12">
            <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
    </form>
    </div>
  );
}

export default SetupProfilePage;