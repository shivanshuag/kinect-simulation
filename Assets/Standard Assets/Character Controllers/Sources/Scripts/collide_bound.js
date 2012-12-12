//var HITS=0;
var hits : GUIText;
var soccer_ball : Rigidbody;
var shoot : Transform;
var goal_text : GUIText;
function OnCollisionEnter(theCollision : Collision)
{
 if(theCollision.gameObject.name=="soccer_pre(Clone)")
 {
 //SCORE=SCORE+1;
// Debug.Log(SCORE);
 var ball2 = GameObject.Find("soccer_pre(Clone)");
  Destroy(ball2);
   var hit=PlayerPrefs.GetInt("hit_next")+1;
 PlayerPrefs.SetInt("hit_next",hit);
 hits.text=""+ hit;
 
 
 DontDestroyOnLoad (GUIText.goal_text);
 Application.LoadLevel(1);
 
 
 
 
 
 
 //if( ball == null)
 //ball = GameObject.Find("soccer");
 
 //goal_text.text=SCORE+"";

 
 
 /*
 yield WaitForSeconds (3);
 var soccerball : Rigidbody;
 soccerball = Instantiate(soccer_ball,shoot.position,Quaternion.identity);
 soccerball.velocity = transform.TransformDirection (Vector3.forward * 0);
 HITS=HITS+1;
 hits.text=HITS+"";
 //soccerball.RigidBody.AddForce(0);
 */
 }
 }
 