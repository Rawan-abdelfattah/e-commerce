import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>  <div>
    <body>
        <div class="container ">
            <div class="row ">
                <div class="col-md-12 text-center  ">
                    <div class="text mt-3">
                        <h1 class="text-main fw-bold">FreshCart</h1>
                        <h2 class="w-50 mx-auto">
                            FreshCart find all you want !! 
                        </h2>
                    </div>
                </div>
                <div class="col-auto  m-auto my-4 text-center  p-5">
                    <div class="form-control shadow  bg-white ">
                        <form class="" action="index.php" method="post" autocomplete="">
    
                           
                           
                            <p class="error"></p>
                            <input type="email" placeholder="Email address or phone number" class=" form-control mt-2" name="email" id="email" required />
                            <input type="password" placeholder="Password " class=" form-control mt-2" name="password" id="password" required />
                          <Link to='/'>
                            <button class=" btn text-white mt-2 login_btn form-control p-2 fw-bold">
                            Log in
                        </button>
                        
                        </Link>
                        <Link to='/'>
                            <button class=" btn text-white mt-2 login_btn form-control p-2 fw-bold">
                            Home page
                        </button>
                        
                        </Link>
                        
                            <h6 class="blue_color mt-3">Forgotten password?</h6>
                            <hr />
    
                        </form>
                        <Link to="/register">
                            <button class="btn bg-main text-white mt-3  mb-3 p-2 fw-bold  " type="submit" action='createAccount.html'>
                                Create new account
                            </button>
                        </Link>
    
                    </div>
                    <h6 class="mt-2">
                        Create a Page for a celebrity, brand or business.
                    </h6>
                </div>
            </div>
        </div>
    
      
    
        <script src="./js/bootstrap.bundle.min.js"></script>
        <script src="./js/jquery-3.6.4.min.js"></script>
        <script src="./js/main.js"></script>
    </body></div></div>
  )
}
