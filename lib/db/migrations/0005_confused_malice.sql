CREATE TABLE "Subscription" (
	"createdAt" timestamp NOT NULL,
	"userId" uuid NOT NULL,
	"sub" jsonb NOT NULL,
	CONSTRAINT "Subscription_userId_pk" PRIMARY KEY("userId")
);
--> statement-breakpoint
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_userId_User_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE no action ON UPDATE no action;